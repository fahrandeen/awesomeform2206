export const required = value =>
    value ? undefined : 'Feild is required'

export const minLength = value =>
    value.length < 4 ? 'Values must be at least 4 charactor' : undefined

export const maxLength = value =>
    value.length > 10 ? 'Values is too long' : undefined

export const matchesPassword = (value, allValues) =>
    value === allValues.password ?
        undefined : "Password not matched"

export const asyncValidate = async values => {
    const sleep = ms => new Promise(resolve =>setTimeout(resolve, ms));
    await sleep(1000);
    if (['fahran', 'hamdhy'].includes(values.username)) {
        return Promise.reject({
            username: 'Already taken'
        })
    }
}