<template lang="pug">
.documents
  div.title
    h4.mb-2 Recent Documents
    h6.allDocBtn View All Documents
  div.container
    div.header
      h6.doc Document Name
      h6.date Received On
    DocumentList(:documents="documents")
</template>

<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import { useDocumentStore } from "@/store/document";
import DocumentList from "@/components/document/DocumentList.vue";

const documentStore: any = useDocumentStore();
let documents = ref([]);

watchEffect(() => {
  if (documentStore.documents.length) {
    documents.value = documentStore.documents;
  }
});
</script>

<style lang="scss">
.documents {
  .title {
    display: flex;
    justify-content: space-between;
  }
  .allDocBtn {
    cursor: pointer;
    color: $primary-p-50 !important;
    padding-bottom: 13px;

    font-size: 14px;
    font-weight: 700;
    line-height: 24px;

    &:hover {
      transition: 0.5s;
      color: $purple-p-70 !important;
    }
  }

  .container {
    padding: 32px 24px;
    height: 433px;
    .header {
      display: flex;
      align-items: flex-start;
      align-self: stretch;
      padding: 0 16px 20px 16px;
      height: 44px;
      .doc {
        width: 580px;
      }
    }
  }
}
</style>
