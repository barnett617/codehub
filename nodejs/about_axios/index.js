const axios = require('axios');

axios.get('https://api.github.com/users')
    .then(res => {
        console.log('==========================')
        // for (var p in res) {
        //     console.log(p)
        // }
        // ==========================
        // status
        // statusText
        // headers
        // config
        // request
        // data

        if (res.status === 200) {
            const data = res.data;
            // for (var q in data) {
            //     console.log(q);
            // }
            // console.log(typeof data)
            // object

            // console.log('======', data);
            try {
                const arr = Array.from(data);
                const users = arr.reduce((acc, cur) => {
                    return acc.concat(cur.login);
                }, [])
                console.log('users', users);
                // users [
                //     'mojombo',     'defunkt',      'pjhyett',
                //     'wycats',      'ezmobius',     'ivey',
                //     'evanphx',     'vanpelt',      'wayneeseguin',
                //     'brynary',     'kevinclark',   'technoweenie',
                //     'macournoyer', 'takeo',        'caged',
                //     'topfunky',    'anotherjesse', 'roland',
                //     'lukas',       'fanvsfan',     'tomtt',
                //     'railsjitsu',  'nitay',        'kevwil',
                //     'KirinDave',   'jamesgolick',  'atmos',
                //     'errfree',     'mojodna',      'bmizerany'
                //   ]
            } catch (e) {
                console.log('reduce error', e);
            }
        }
    })