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
        <button @click="createConnector" class="rounded-lg p-2">
            Connect your {{ props.name }} account
        </button>
        <div v-if="loading"><Loader /></div>
    </div>
</template>
<script setup>
import { ref } from "vue";
import axios from "../utils/axiosInstance";
import Loader from "./Loader.vue";
const connectorId = ref("");
const props = defineProps(["name"]);
const data = {
    connect_card_config: {
        redirect_uri: "http://localhost/dashboard",
    },
};
const service = ref();
const loading = ref(false);
switch (props.name) {
    case "Google Ads":
        service.value = "google_ads";
        break;
    case "Google Analytics":
        service.value = "google_analytics_4";
        break;
    case "Facebook Ads":
        service.value = "facebook_ads";
        break;
    default:
        service.value = "";
        break;
}

const payload = {
    service: service.value,
    group_id: "reverent_description",
    config: {
        schema: `${service.value}_1`,
    },
};
const createConnector = async () => {
    loading.value = true;
    const response = await axios.post("/connectors", payload);
    connectorId.value = response.data?.data.id;
    if (connectorId.value !== "") {
        connectAccount();
    }
};
const connectAccount = async () => {
    const response = await axios.post(
        `/connectors/${connectorId.value}/connect-card`,
        data
    );
    loading.value = true;
    const uri = response.data?.data.connect_card.uri;
    if (uri) {
        window.location.href = uri;
    }
};
</script>
