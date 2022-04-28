// const URL = "http://localhost:8080/CA2_Back_End_war_exploded";
const URL = "https://alekw.dk/ca2";

function handleHttpErrors(res) {
    if (!res.ok) {
        return Promise.reject({ status: res.status, fullError: res.json() })
    }
    return res.json();
}

function apiFacade() {
    /* Insert utility-methods from a later step (d) here (REMEMBER to uncomment in the returned object when you do)*/

    const setupDatabase = (setResponseText) => {
        const options = makeOptions("GET", false);
        return fetch(URL + "/api/setup", options)
            .then(handleHttpErrors)
            .then(res => {
                setResponseText(res.msg);
                // console.log(res.msg);
            })
    }

    const login = (user, password, assignRole) => {
        const options = makeOptions("POST", true, { username: user, password: password });
        return fetch(URL + "/api/login", options)
            .then(handleHttpErrors)
            .then(res => {
                setToken(res.token)
                assignRole(res.roles[0])
                console.log(res)
            })
    }

    const signup = (user, password, setResponseText) => {
        const options = makeOptions("POST", false, { username: user, password: password });
        return fetch(URL + "/api/createuser", options)
            .then(handleHttpErrors)
            .then(res => {
                setResponseText(res.msg);
                // console.log(res.msg);
            })
    }

    const getAllBackgrounds = (setBackgrounds) => {
        const options = makeOptions("GET", false);
        return fetch(URL + "/api/background/all", options)
            .then(handleHttpErrors)
            .then(res => {
                setBackgrounds(res);
            })
    }

    const getUserCharacters = (username, setCharacters) => {
        const options = makeOptions("GET", true);
        return fetch(URL + `/api/character/user/${username}`, options)
            .then(handleHttpErrors)
            .then(res => {
                setCharacters(res);
            })
    }

    const getUserCharacter = (characterId, setCharacter) => {
        const options = makeOptions("GET", true);
        return fetch(URL + `/api/character/${characterId}`, options)
            .then(handleHttpErrors)
            .then(res => {
                setCharacter(res);
            })
    }

    const getRoll = (dice, setValue) => {
        const options = makeOptions("GET", false);
        return fetch(URL + `/api/dice/${dice}`, options)
            .then(handleHttpErrors)
            .then(res => {
                setValue(res);
            })
    }

    const createCharacter = (data) => {
        const options = makeOptions("POST", true, {
            characterName: data.characterName,
            characterLevel: data.characterLevel,
            characterXp: data.characterXp,
            characterHp: data.characterHp,
            characterArmor: data.characterArmor,
            characterAngles: data.characterAngles,
            userName: data.userName,
            backgroundDTO: {
                id: data.backgroundDTO.id
            },
            characterSkillDTO: {
                strength: data.characterSkillDTO.strength,
                endurance: data.characterSkillDTO.endurance,
                intelligence: data.characterSkillDTO.intelligence,
                finesse: data.characterSkillDTO.finesse,
                perception: data.characterSkillDTO.perception,
                charisma: data.characterSkillDTO.charisma,
                initiative: data.characterSkillDTO.initiative,
                nerves: data.characterSkillDTO.nerves,
                melee: data.characterSkillDTO.melee,
                throwingString: data.characterSkillDTO.throwingString,
                firearms: data.characterSkillDTO.firearms,
                sneak: data.characterSkillDTO.sneak,
                flatter: data.characterSkillDTO.flatter,
                lie: data.characterSkillDTO.lie,
                intimidate: data.characterSkillDTO.intimidate,
                trade: data.characterSkillDTO.trade,
                repair: data.characterSkillDTO.repair,
                traps: data.characterSkillDTO.traps,
                survival: data.characterSkillDTO.survival,
                crafting: data.characterSkillDTO.crafting,
                science: data.characterSkillDTO.science,
                alchemy: data.characterSkillDTO.alchemy,
                medical: data.characterSkillDTO.medical,
                history: data.characterSkillDTO.history
            }
        });
        return fetch(URL + "/api/character", options)
            .then(handleHttpErrors)
            .then(res => {
                console.log(res)
            })
    }

    const fetchUserData = (role) => {
        const options = makeOptions("GET", true); //True add's the token
        return fetch(URL + `/api/info/${role}`, options).then(handleHttpErrors);
    }

    // const fetchBeerJoke = () => {
    //     const options = makeOptions("GET", false); //True add's the token
    //     return fetch(URL + "/api/xxx/data", options).then(handleHttpErrors);
    // }

    const setToken = (token) => {
        localStorage.setItem('jwtToken', token)
    }

    const getToken = () => {
        return localStorage.getItem('jwtToken')
    }

    const loggedIn = () => {
        const loggedIn = getToken() != null;
        return loggedIn;
    }

    const logout = () => {
        localStorage.removeItem("jwtToken");
    }

    const makeOptions = (method, addToken, body) => {
        var opts = {
            method: method,
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json',
            }
        }
        if (addToken && loggedIn()) {
            opts.headers["x-access-token"] = getToken();
        }
        if (body) {
            opts.body = JSON.stringify(body);
        }
        return opts;
    }
    return {
        makeOptions,
        setToken,
        getToken,
        loggedIn,
        login,
        setupDatabase,
        signup,
        logout,
        fetchUserData,
        getAllBackgrounds,
        getUserCharacters,
        getUserCharacter,
        getRoll,
        createCharacter
    }
}

const facade = apiFacade();
export default facade;
