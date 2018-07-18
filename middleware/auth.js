export default function ({store, route, redirect, error}) {
    if (process.server) {
        return;
    }
    console.log('CHECK AUTH');
    console.log('-- route', route);
    console.log('-- path', route.path);

    const urlRequiresAuth = [
        /^\/.+/,
    ].some((pathRegex) => {
        return pathRegex.test(route.path);
    });

    const urlRequiresNonAuth = [
        /^\/profile\/confirm/,
    ].some((pathRegex) => {
        return pathRegex.test(route.path);
    });

    // const urlRequiresNonAuth = /^\/auth(\/|$)/.test(route.path);
    // const urlRequiresUserWithProfile = [
    //     /^\/settings\/profile-/,
    // ].some((pathRegex) => {
    //     return pathRegex.test(route.path);
    // });


    if (!store.getters.isAuthorized && urlRequiresAuth && !urlRequiresNonAuth) {
        console.log('-- restricted: redirect to auth');
        return redirect('/');
    }
    // if (store.getters.isAuthorized && urlRequiresNonAuth) {
    //     console.log('-- restricted: redirect to index');
    //     return redirect('/auth');
    // }

    // if (!store.getters.isUserWithProfile && urlRequiresUserWithProfile) {
    //     console.log('-- restricted: 404 settings not available');
    //     return error({statusCode: 404, message: 'Page not found'});
    // }

    console.log('-- not restricted');
    return Promise.resolve();
}