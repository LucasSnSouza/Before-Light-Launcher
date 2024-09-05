<template>
    <div class="modal-wrapper flex x-center y-center">
        <div class="modal-panel">
            <div class="modal-top-title">
    
            </div>
            <div class="modal-slot-screen">
                DDDD
                <slot/>
            </div>
            <div class="modal-action-button">
                
            </div>
        </div>
    </div>
</template>

<script>

import * as Button from "@/components/Button"

export default{
    components: {
        ...Button
    },
    props:{
        type: {
            type: String,
            default: "one"
        },
        class: {
            type: String,
            default: null
        }
    }
}

</script>

<style lang="scss" scoped>

.modal-wrapper{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    .modal-panel{
        width: 300px;
        height: 250px;
        background: white;
        box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.100);
    }
}

</style>