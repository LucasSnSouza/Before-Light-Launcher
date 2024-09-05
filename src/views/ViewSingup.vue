<template>

    <div class="login-panel-wrapper w-full flex">

        <div class="content-panel w-half h-full">

            <div class="app-title-frame p-lg">
                <h1 class="font-sm color-brand-four letter-sm"></h1>
            </div>

            <div class="app-inputs-frame flex x-center y-center">

                <div class="app-inputs-form w-half flex flex-column gap-lg">
                    <h1 class="font-lg color-brand-four">Sing up</h1>
                    <p class="font-xsm color-brand-four o-half">Singup for your new command controller.</p>
                    <InputText
                        title="Email"
                        placeholder="Enter your e-mail"
                        v-model="form['email']"
                        :value="form['email']"
                    />
                    <InputText
                        title="Password"
                        placeholder="Enter your password"
                        v-model="form['password']"
                        :value="form['password']"
                    />
                    <ButtonBasic
                        class="bg-color-brand-three color-brand-one p-md rounded-md pointer"
                        @click="SetUserAuthentication()"
                    >
                        Sing up
                    </ButtonBasic>
                    <div class="w-full flex x-center gap-md">
                        <p class="font-xsm o-half">Already have an account? </p>
                        <h1 
                            class="color-brand-three font-xsm pointer" 
                            @click="this.$router.push( { path: '/' } )"
                        >
                            Sing in
                        </h1>
                    </div>
                </div>

            </div>

            <div class="app-copyright p-lg">
                <p class="font-xsm o-half">before light, todos os direitos reservados 2024</p>
            </div>

        </div>

        <div class="thumbnail-panel w-half h-full flex x-center y-center relative">

            <div class="circle-thumbnail-image rounded"></div>

            <div class="backdrop-blur-frame h-half"></div>

        </div>

    </div>

</template>

<script>

import { useAuthentication } from '@/stores/authentication';

import * as Button from "@/components/Button"
import * as Input from "@/components/Input"

export default{
    components: {
        ...Button,
        ...Input
    },
    data(){
        return{
            form: {},
        }
    },
    created(){
    },
    methods: {
        SetUserAuthentication(){
            if(this.form){
                try{
                    useAuthentication().fetchSingup(this.form);
                    this.$router.push( { path: '/' } );
                }catch(err){

                }
            }
        }
    }
}

</script>

<style lang="scss" scoped>

.login-panel-wrapper{

    .content-panel{
        width: 600px;    
        
        .app-title-frame{
            height: 45px;
        }

        .app-inputs-frame{
            height: calc(100% - 90px);
        }

        .app-copyright{
            height: 45px;
        }
        
    }

    .thumbnail-panel{
        width: calc(100% - 600px);
        background: var(--color-brand-two);

        .circle-thumbnail-image{
            width: 200px;
            height: 200px;
            background: var(--color-brand-three);
        }

        .backdrop-blur-frame{
            position: absolute;
            bottom: 0;
            width: 100%;
            backdrop-filter: blur(12px);
        }

    }

}

</style>