

import { currentUser } from "@clerk/nextjs/server";
import {UploadThingError} from "uploadthing/server";
import {createUploadthing ,type FileRouter} from "uploadthing/next"
const f = createUploadthing();

export const ourFileRouter = {
    // Define as many FileRoutes as you like, each with a unique routeSlug
   pdfuploader:f({
    pdf:{maxFileSize: "32MB"} }).
    middleware(
    async ({req}) => {
    const user=await currentUser();
    if (!user) throw new UploadThingError("UNAUTHORIZED");
    
    return {
        userId:user.id,}
    }
   ).onUploadComplete(async({ metadata, file }) => {
   
    console.log("Upload complete for userId:", metadata.userId);
    console.log("file url", file.ufsUrl);
    return { uploadedBy: metadata.userId ,file};
      
    } ),
   
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;