import firebase from 'firebase';
import dotenv from 'dotenv'

dotenv.config();
const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};
firebase.initializeApp(config);

const resources = {
    auth: firebase.auth(),
    provider: new firebase.auth.GoogleAuthProvider(),
    database: firebase.firestore(),
    storage: firebase.storage(),
};

const providerFB = new firebase.auth.FacebookAuthProvider();
providerFB.addScope('user_birthday');
providerFB.addScope('user_gender');

const authModule = {
    googleLogin: async () => await resources.auth.signInWithPopup(resources.provider),
    facebookLogin: async () => await firebase.auth().signInWithPopup(providerFB)
};
const storageModule = {
    upload: async (path, file) => await resources.storage.ref(path).put(file),
    getUrl: async (path) => await resources.storage.ref(path).getDownloadURL()
};
const dataModule = {
    hasUser: async (email) => {
        return (await resources.database.collection('Users').doc(email).get()).exists
    },
    addUser: async (email, name) => {
        await resources.database.collection('Users').doc(email).set({
            email: email,
            name: name,
            birth: false,
            profile: false
        });
    },
    readUser: async (email) => {
        try {
            const doc = await resources.database.collection('Users').doc(email).get();
            if (!doc.exists) {
                return null;
            } else {
                return doc.data();
            }

        } catch (e) {
            return e;
        }
    },
    updateFriends: async (userEmail, friendEmail) => {
        const flag = await dataModule.readUser(friendEmail);
        await resources.database.collection('Users').doc(userEmail).collection('friendsList').doc(friendEmail).update({
            birth: flag.birth,
            profile: flag.profile,
        });

    },
    updateFriendsList: async (userEmail) => {
        (await resources.database.collection('Users').doc(userEmail).collection('friendsList').get())
            .forEach(doc => {
                dataModule.updateFriends(userEmail, doc.id);
            });
    },
    readFriendsList: async (userEmail) => {
        const res = [];
        let data;
        (await resources.database.collection('Users').doc(userEmail).collection('friendsList').get())
            .forEach(doc => {
                data = doc.data();
                if (doc.profile === false || doc.profile === "false") {
                    data.friendImg = storageModule.getUrl(`image/profile/defalut_profile.png`);
                } else {
                    data.friendImg = storageModule.getUrl(`image/profile/${doc.id}`);
                }

                res.push(data);
            });
        return res;
    },
    addBirthdayFriend: async (userEmail) => {
        const list = [];
        let data;
        const res = await dataModule.dDayCheck(userEmail);
        (await resources.database.collection('Users').doc(userEmail).collection('birthdayList').get())
            .forEach(doc => {
                resources.database.collection('Users').doc(userEmail).collection('birthdayList').doc(doc.id).delete().then(function () {
                    console.log("Document successfully deleted!");
                }).catch(function (error) {
                    console.error("Error removing document: ", error);
                });
            });

        (await resources.database.collection('Users').doc(userEmail).collection('friendsList').get())
            .forEach(doc => {
                data = doc.data();
                for (let i = 0; i < res.length; i++) {
                    if (data.id === res[i]) {
                        resources.database.collection('Users').doc(userEmail).collection('birthdayList').doc(res[0]).set({
                            id: data.id,
                            name: data.name,
                            birth: data.birth,
                            profile: data.profile,
                        });
                        list.push(data);
                    }
                }
            });
        return list;
    },
    dDayCheck: async (userEmail) => {
        let res = [];
        let dDay;
        let today = new Date();
        let nowYear = today.getFullYear();
        let nowMonth = today.getMonth() + 1;
        let nowDate = today.getDate();
        let birthday;
        let data;
        (await resources.database.collection('Users').doc(userEmail).collection('friendsList').get())
            .forEach(doc => {
                data = doc.data();
                if (data.birth !== false || data.birth !== "false") {
                    birthday = data.birth.split("-");
                    birthday.forEach((v, i) => {
                        birthday[i] = parseInt(v)
                    });

                    if (nowMonth > birthday[0]) {
                        let nextBirth = new Date(nowYear + 1, birthday[0] - 1, birthday[1]);
                        dDay = Math.ceil((nextBirth.getTime() - today.getTime()) / 1000 / 60 / 60 / 24);
                    } else if (nowMonth === birthday[0] && nowDate > birthday[1]) {
                        let nextBirth = new Date(nowYear + 1, birthday[0] - 1, birthday[1]);
                        dDay = Math.ceil((nextBirth.getTime() - today.getTime()) / 1000 / 60 / 60 / 24);
                    } else {
                        let nextBirth = new Date(nowYear, birthday[0] - 1, birthday[1]);
                        dDay = Math.ceil((nextBirth.getTime() - today.getTime()) / 1000 / 60 / 60 / 24);
                    }
                } else {
                    dDay = 100;
                }

                if (dDay <= 7) {
                    res.push(doc.id);
                }
            });
        return res;
    },
    addFriend: async (email, friendId, friendName, friendBirth, friendProfile) => {
        await resources.database.collection('Users').doc(email).collection('friendsList').doc(friendId).set({
            id: friendId,
            name: friendName,
            birth: friendBirth,
            profile: friendProfile,
        });
    },
    addPresent: async (email, itemData, type) => {
        let item = await dataModule.readOneCBirth(type, itemData.productId);
        await console.log("add present "+item);
        await resources.database.collection('Users').doc(email).collection('PresentList').doc(itemData.productId).set(item);
    },
    updateProfile: async (email, imgFile) => {
        await storageModule.upload(`image/profile/${email}`, imgFile);
        await resources.database.collection('Users').doc(email).update({
            profile: true
        });
    },
    firstProfile: async (email, imgFile) => {
        await storageModule.upload(`image/profile/${email}`, imgFile);
    },
    updateBirthday: async (email, birthday) => {
        await resources.database.collection('Users').doc(email).update({
            birth: birthday
        });
    },
    readPresent: async (email) => {
        let birthItems = await resources.database.collection('Users').doc(email).collection('PresentList').get();
        birthItems = birthItems.docs.map(el => el.data());
        return birthItems;
    },
    readProducts: async (type) => {
        let birthItems = await resources.database.collection('Products').doc('case').collection(type).get();
        birthItems = birthItems.docs.map(el => el.data());
        return birthItems;
    },
    readOneCBirth: async (type, productId) => {
        let data;
        const res = [];
        (await resources.database.collection('Products').doc('case').collection(type).get())
            .forEach(doc => {
                data = doc.data();
                if (data.productId === productId) {
                    console.log("read one birth");
                    console.log(data);
                    //res.push(data);
                }
            });
        //let item = await resources.database.collection('Products').doc('case').collection(type).get(productId);
        return data;
    },
};

export {authModule, dataModule, storageModule};
