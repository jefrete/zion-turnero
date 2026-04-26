const SUPABASE_URL = 'TU_URL_DE_SUPABASE';
const SUPABASE_KEY = 'TU_KEY_ANON_DE_SUPABASE';
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function handleAuth() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;
    const status = document.getElementById('status');

    status.innerText = "> ENCRYPTING...";

    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
    });

    if (error) {
        status.innerText = "> ERROR: " + error.message;
    } else {
        status.innerText = "> ACCESS_PENDING: CHECK_MAIL";
    }
}