
const domain = process.env.api_base_url;
export const
    /**
     * Auth Api
     */
    login = domain + '/auth/login?token=full',
    register = domain + '/auth/register',
    logout = domain + '/auth/logout?all=true',

    /**
     * User Api
     */
    getProfile = domain + '/users/me',
    updateProfile = domain + '/user/me',
    getListOrder = (skip, limit) =>
        domain + `/users/me/orders?skip=${skip}&limit=${limit}`
    ,
    getMoney = domain + '/user/me/money',
    getTransaction = domain + '/users/me/transactions',

    /**
     * Category Api
     */
    getListCategory = domain + '/categories',
    getCategoriesWithProduct = domain + '/categories/all',
    getACategory = function (id) {
        return domain + `/categories/${id}`
    },
    getProductInCategory = function (id) {
        return domain + `/categories/${id}/products`;
    },


    /**
     * Product Api
     */
    getListProduct = domain + '/product',
    getAProduct = (id) => domain + '/products/' + id,
    getCategoryInProduct = domain + '/products/:id/category',
    getStatusProduct = (id) => domain + `/products/${id}/status`,
    buyProduct = (id) => domain + `/products/${id}/buy`,

    /**
     * Order Api
     */
    getOrderGlobal = domain + '/orders/global',
    getAOrder = domain + '/orders/:id',
    getDataOrder = id => domain + `/orders/${id}/data?download=true`,
    getHistory = domain + '/orders/broadcast',

    /**
     * Other Api
     */
    otp = domain + '/other/totp',

    /**
     * Global Api
     */
    getNotification = domain + '/notification',
    getPayment = domain + '/payments'
