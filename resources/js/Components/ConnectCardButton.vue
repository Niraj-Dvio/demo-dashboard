<template>
    <div class="flex items-center justify-center">
        <div v-if="props.name == 'Google Ads'">
            <img src="../../assests/google-ads.png" class="h-4 w-auto" />
        </div>
        <div v-else-if="props.name == 'Facebook Ads'">
            <img src="../../assests/facebook_ads.png" class="h-4 w-auto" />
        </div>
        <div v-else-if="props.name == 'Google Analytics'">
            <img
                src="../../assests/google_analytics_4.png"
                class="h-4 w-auto"
            />
        </div>
        <button @click="connectAccount" class="rounded-lg p-2">
            Connect your {{ props.name }} account
        </button>
    </div>
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
    console.log(uri);
    // if (uri) {
    //     window.location.href = uri;
    // }
};
</script>
