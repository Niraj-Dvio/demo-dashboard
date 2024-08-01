<template>
    <button @click="connectAccount" class="rounded-lg bg-gray-100 p-2 m-2">
        Connect your {{ props.name }} account
    </button>
</template>
<script setup>
import axios from "../utils/axiosInstance";
const props = defineProps(["connectorId", "name"]);
console.log(props.connectorId);
const data = {
    connect_card_config: {
        redirect_uri: "http://localhost/dashboard",
    },
};
const connectAccount = async () => {
    const response = await axios.post(
        `/connectors/${props.connectorId}/connect-card`,
        data
    );
    console.log(response && response.data?.data.connect_card);
    const uri = response.data?.data.connect_card.uri;
    if (uri) {
        window.location.href = uri;
    }
};
</script>
