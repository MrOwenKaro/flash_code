import Prompt from "@/models/prompt";
import { connectToDB } from "@/utils/database";

export const GET = async (req,{params}) => {
    try {
        await connectToDB();
        const prompt = await Prompt.findById(params.id).populate('creator');
        if(!prompt) return new Response("Specified prompt doesnt exist",{status:404})

        return new Response(JSON.stringify(prompt),{
            status:200
        })
    } catch (error) {
        return new Response(JSON.stringify("Unable to retrieve searched prompts",{status:500}))
    }
}

export const PATCH = async (req,{params}) => {
    const {prompt,tag} = await req.json();

    try {
        await connectToDB();

        const existingPrompt = await Prompt.findById(params.id);

        if(!existingPrompt) return new Response("Specified Prompt doesnt exist",{status:404})

        existingPrompt.prompt = prompt;
        existingPrompt.tag = tag;

        await existingPrompt.save();

        return new Response(JSON.stringify(existingPrompt),{status:200})
    } catch (error) {
        return new Response("Something went wrong when updating the prompt",{status:500})
    }

}

export const DELETE = async (req,{params}) => {
    try {
        await connectToDB();
        await Prompt.findByIdAndRemove(params.id);
        return new Response("You have successfully deleted your prompt",{status:200})
    } catch (error) {
        return new Response("Something went wrong trying to delete the Prompt",{status:500})
    }
}