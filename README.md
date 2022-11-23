## CarShop

Live Website: https://autosaleszone.netlify.app

```
• CarShop is a car selling ecommerce web application
• Have features like add product, add review, orders, manage orders
• Developed with react, react-router, react-rating, express js, database mongodb, material ui
• User authentication system with firebase
• Two sign in method implemented google sign in, email/password
• Dynamic reviews shown to the home page when a user reviews
• To book or purchase an order user must login
• For best user experiences this app contains an awesome dashboard builted with MUI
• Complete mobile responsive app
```

```js
// a code clip of this app
export const authContext = createContext(null);
const AuthProvider = ({children}) => {
    const allContexts = useFirebase();
    return (
        <authContext.Provider value={allContexts}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;
```

![Screenshot 2022-11-23 at 9 17 29 AM](https://user-images.githubusercontent.com/86913163/203485276-0d94ab0c-b207-4ecd-b6f8-8d28c0fa8327.png)
![Screenshot 2022-11-23 at 9 17 44 AM](https://user-images.githubusercontent.com/86913163/203485282-7641a453-de61-433b-a936-6f3c7a6b9509.png)
![Screenshot 2022-11-23 at 9 20 16 AM](https://user-images.githubusercontent.com/86913163/203485281-2e9c7dab-1101-49c4-aa23-a255e4b1e847.png)

