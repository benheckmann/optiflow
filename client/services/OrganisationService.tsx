import {PostgrestResponse} from "@supabase/supabase-js";
import {supabase} from "../lib/Store";
import {Organisation} from "../models/Organisation";
import {PostgrestResponseFailure, PostgrestResponseSuccess} from "@supabase/postgrest-js";


const TABLE_ORGANISATIONS = 'organisations';

const fetchOrganisation = async (setData: (data: Organisation) => void, id: number) => {
    try {
        // @ts-ignore ignore type not perfect
        const data: PostgrestResponse<Organisation> = await supabase.from(TABLE_ORGANISATIONS).select('*').eq("id", id);
        if (data.data !== null) {
            const result = data.data[0];
            setData(result);
        }
    } catch (error) {
        console.error('Error retrieving waiting_queues from database', error);
    }
}

const saveOrganisation = async (organisation: Organisation) => {
    try {
        // @ts-ignore ignore type not perfect
        const data: PostgrestResponse<Organisation> = await supabase.from(TABLE_ORGANISATIONS).select('*').eq('name', organisation.name);
        if (data.data == null) {
            // @ts-ignore ignore type not perfect
            const data: PostgrestResponse<undefined> = await supabase
                .from(TABLE_ORGANISATIONS)
                .insert(organisation);

            if (data.error !== null) {
                console.error('Error saving organisation', organisation, data.error);
            }
        }

    } catch (error) {
        console.error('Error saving organisation to database', error);
    }
};

const updateOrganisation = async (organisation: Organisation) => {
    try {
        const data: PostgrestResponseSuccess<null> | PostgrestResponseFailure = await supabase.from(TABLE_ORGANISATIONS).update(organisation).eq('id', organisation.id);
        if (data.error !== null) {
            console.error('Error saving organisation', organisation, data.error);
        }

    } catch (error) {
        console.error('Error saving organisation to database', error);
    }
};

export default {
    updateOrganisation,
    saveOrganisation,
    fetchOrganisation
}