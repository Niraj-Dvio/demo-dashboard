<template>
    <div class="flex flex-col mx-auto p-3">
        <ConnectCardButton :connectorId="googleAdsID" name="Google Ads" />
        <ConnectCardButton :connectorId="facebookAdsID" name="Facebook Ads" />
        <ConnectCardButton
            :connectorId="googleAnalyticsID"
            name="Google Analytics"
        />
    </div>
</template>
<script setup>
import ConnectCardButton from "./ConnectCardButton.vue";
const googleAdsID = import.meta.env.VITE_FIVETRAN_GOOGLE_ADS_CONNECTOR_ID;
const facebookAdsID = import.meta.env.VITE_FIVETRAN_FACEBOOK_ADS_CONNECTOR_ID;
const googleAnalyticsID = import.meta.env
    .VITE_FIVETRAN_GOOGLE_ANALYTICS_CONNECTOR_ID;
</script>
