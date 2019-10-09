<template>
    <div>
        <header>
            <div class="logo">
                <a href="#" class="logoLink"><img src="../assets/logo.png"></a>
            </div>
            <button class="btnMenu">
                <i class="material-icons">
                    menu
                </i>
            </button>
            <button class="btnSearch">
                <i class="material-icons">
                    search
                </i>
            </button>
        </header>
    </div>
</template>

<script>
    document.addEventListener("DOMContentLoaded", function() {
        const header = document.querySelector("header");
        const sticky = header.offsetTop;
        window.onscroll = function() {
            if(window.pageYOffset > sticky) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
        }
    });

    export default {
        data() {
            return {

            }
        }
    }
</script>

<style scoped>
    header {
        padding: 14px 16px 0 16px;
        width: 100%;
        height: 54px;
        background-color: white;
        box-sizing: border-box;
    }
    .logo {
        text-align: center;
        /*margin-top: 14px;*/
    }
    .logoLink {
        display: inline-block;
    }
    .logo img {
        width: 100%;
        vert-align: middle;
    }
    .btnMenu {
        position: absolute;
        height: 48px;
        left: 16px;
        top: 4px;
        cursor: pointer;
    }
    .btnSearch {
        position: absolute;
        height: 48px;
        right: 16px;
        top: 4px;
        cursor: pointer;
    }
    .sticky {
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 1;
    }
</style>
