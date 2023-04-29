import {PostgrestResponse, PostgrestSingleResponse} from "@supabase/supabase-js";
import {supabase} from "../lib/Store";
import {Queue} from "../models/Queue";
import {TABLE_ACCOUNT_INFORMATION} from "./AccountService";
import {PostgrestResponseSuccess} from "@supabase/postgrest-js";

export const TABLE_QUEUES = 'queues';

const fetchQueues = async (account_id: string): Promise<Queue[]> => {
    try {
        // @ts-ignore
        const data: PostgrestResponse<{ organisations: { queues: [Queue] } }> = await supabase.from(TABLE_ACCOUNT_INFORMATION).select('organisations ( queues (*) )').eq("account_id", account_id);
        if (data.data !== null) {
            const result = data.data[0].organisations.queues;
            return Promise.resolve(result);
        }
    } catch (error) {
        console.error('Error retrieving waiting_queues from database', error);
    }
    return Promise.reject();
}

const fetchQueue = async (queue_id: number): Promise<Awaited<PostgrestResponseSuccess<Queue[]>>> => {
    try {
        // @ts-ignore
        const response: PostgrestResponse<Queue> = await supabase.from(TABLE_QUEUES).select().eq('id', queue_id);
        if (response.data !== null) {
            return Promise.resolve(response);
        }

    } catch (error) {
        console.error('Error fetching the  queue', error);
    }
    return Promise.reject();
}

const updateQueue = async (queue: Queue) => {
    try {
        // @ts-ignore
        const response: PostgrestResponse<null> = await supabase.from(TABLE_QUEUES).update(queue).eq('id', queue.id);
        if (response.error !== null) {
            console.error('Error updating queue', queue, response.error);
        }
    } catch (error) {
        console.error('Error updating waiting_queue from database', error);
    }
}


const createQueue = async (name: string, organisation_id: number): Promise<Queue> => {
    try {
        const response: PostgrestResponse<Queue> = await supabase.from(TABLE_QUEUES).insert({
            name: name,
            organisation_id: organisation_id
        }).select();
        if (response.data !== null) {
            const result = response.data[0];
            return Promise.resolve(result);
        }
    } catch (error) {
        console.error('Error retrieving waiting_queues from database', error);
    }
    return Promise.reject();
}

const deleteQueue = async (queue_id: number): Promise<void> => {
    try {
        const response: PostgrestSingleResponse<null> = await supabase.from(TABLE_QUEUES).delete().eq("id", queue_id);
        if(response.error !== null) {
            return Promise.reject(response.error.message);
        } else {
            return Promise.resolve();
        }
    } catch (error) {
        console.error('Error delete a queue from database', error);
    }
}

export default {
    fetchQueues,
    createQueue,
    updateQueue,
    deleteQueue,
    fetchQueue
}