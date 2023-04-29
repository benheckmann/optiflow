const supabasejs = require('@supabase/supabase-js');
const readline = require('readline');
require('dotenv').config({path: '.env.local'});

const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));

const supabase = supabasejs.createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE || '');

// https://stackoverflow.com/a/68504470
(async () => {
    try {
        const email = await prompt('E-Mail to invite: ');
        const organisationId = await prompt('Organization ID (can be looked up in the database): ');
        const response_user = await supabase.auth.admin.inviteUserByEmail(email);
        if (response_user.error) {
            console.log('Error signing up email', email, response_user.error.message);
        } else {
            const userId = response_user.data.user.id;
            const response_database = await supabase.from('account_information').insert({
                account_id: userId,
                organisation_id: +organisationId
            });
            if (!response_database.error) {
                console.log('Successfully invited', email, 'to', organisationId);
            } else {
                console.log('Error assigning organisation:', response_database.error);
            }
        }
        rl.close();
    } catch (e) {
        console.error('Unable to prompt', e);
    }
})();

rl.on('close', () => process.exit(0));