export let GET_USERINFO = '@@profile/GET_USERINFO';


export let getUserInfo = (name, age, photo) => ({
    type: GET_USERINFO,
    name,
    age,
    photo
});