<template>

    <div class="worlds-panel-wrapper bg-color-brand-two w-full flex">

        <div class="worlds-panel-instances h-full w-half flex x-center">

            <div 
                class="worlds-frame-instance flex flex-column x-center gap-lg"
                style="width: 60%"
            >

                <div>
                    <h1 class="font-lg">Hi Lucas!</h1>
                    <p class="font-xsm o-half">Welcome back to the workspace, we missed you!</p>
                </div>

                <div class="flex gap-md">

                    <ButtonBasic
                        class="bg-color-brand-three color-brand-one p-md rounded-sm pointer"
                        @click="this.$router.push( { path: '/' } )"
                    >
                        <MiscIcon
                            icon="logout-icon"
                            :size="[14, 14]"
                        />
                    </ButtonBasic>

                    <ButtonBasic
                        class="bg-color-brand-three color-brand-one p-md rounded-sm pointer"
                        @click="project_search_modal = !project_search_modal"
                    >
                        <MiscIcon
                            icon="zoom-icon"
                            :size="[14, 14]"
                        />
                    </ButtonBasic>

                    <ButtonBasic
                        class="bg-color-brand-three color-brand-one p-md rounded-sm pointer"
                    >
                        <MiscIcon
                            icon="configuration-icon"
                            :size="[14, 14]"
                        />
                    </ButtonBasic>

                </div>
                
                <div
                    v-if="project_search_modal"
                    class="p-lg shadow-sm rounded-sm bg-color-brand-one"
                >
                    <InputText
                        title="in expeditions"
                        class=""
                        placeholder="Search Task or Projects ..."
                    />
                </div>
                
                <div
                    v-if="project_forms" 
                    class="projects-frame flex flex-column gap-lg"
                    style="border-top: 1px solid var(--color-brand-five); padding-top: 12px;"
                >
                    <div class="flex gap-md y-end">
                        <h1 class="font-xsm">Projects</h1>
                        <p class="font-xsm"> {{ project_forms.length }} </p>
                    </div>
                    <div class="flex gap-lg w-full">

                        <div 
                            v-for="(item, index) in project_forms"
                            class="project-item flex flex-column x-center pointer"
                            style="width: 64px"
                            :index="index"
                        >
                            <MiscIconGenerator
                                class="rounded-lg font-xsm"
                                :text-size="13"
                                :text="item?.name"
                                bg-color="#FE8660"
                            />
                            <p class="font-xsm o-half text-center">{{ item?.name }}</p>
                        </div>

                    </div>
                </div>

            </div>

        </div>

        <div class="worlds-panel-status h-full w-half p-lg">

            <div class="worlds-frame-status bg-color-brand-one h-full w-full rounded-md shadow-sm flex x-center y-center">

                <div
                    v-if="!project_forms" 
                    class="flex flex-column gap-md"
                > 
                    <div>
                        <h1 class="font-sm">You do not have active missions yet</h1>
                        <p class="font-xsm o-half">register a new expedition for a cluster so you can see the captain reports.</p>
                        <div class="w-full flex gap-md">
                            <p class="font-xsm o-half">To start from a your first expedition </p>
                            <h1 
                                class="color-brand-three font-xsm pointer" 
                                @click="prefabMocap()"
                            >
                                Click here
                            </h1>
                        </div>
                    </div>
                </div>

                <div
                    class="w-full h-full"
                    style="padding: 56px"
                    v-else
                >
                    <h1 class="font-sm">{{ project_forms[0].name }}</h1>
                    <p class="font-xsm o-half">{{ project_forms[0].description }}</p>
                </div>

            </div>

        </div>

    </div>

</template>

<script>

import * as Button from "@/components/Button"
import * as Input from "@/components/Input"
import * as Modal from "@/components/Modal"
import * as Misc from "@/components/Misc"

export default{
    components: {
        ...Button,
        ...Input,
        ...Modal,
        ...Misc
    },
    data(){
        return{
            project_forms: null,
            project_search_modal: false,
        }
    },
    created(){
    },
    methods: {
        prefabMocap(){
            this.project_forms = [
                {
                    name: "Template Project",
                    description: "Template project contructed for comunication developer, for formatation and documentation the progress of game dashboard.",
                }
            ]
        }
    }
}

</script>

<style lang="scss" scoped>


</style>