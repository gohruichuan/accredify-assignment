import { defineStore } from 'pinia'
import documentAPI from "@/apis/document";

interface Document {
  "id": number,
  "userId": number,
  "docCategory": number,
  "status": string,
  "document_name": string,
  "issuer_name": string,
  "issuer_logo_url": string,
  "recipient_name": string,
  "received_on": string,
  "expire_at": string,
  "created_at": string,
  "updated_at": string,
  "archived_at": string,
  "deleted_at": string
}

interface documentParams
{
  page: number,
  sortBy: string
}
export const useDocumentStore = defineStore('document', {
  state: () => ({
    documents: [] as Document[]
  }),
  actions: {
    async getDocuments(params: documentParams = {page: 1, sortBy: "DESC"}){
      const docRes = await documentAPI.getDocuments(params)
      this.documents = docRes?.data
      console.warn("this.documents ", this.documents);
    }
  }
})
