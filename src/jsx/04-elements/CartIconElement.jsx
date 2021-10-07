import { MainSvgElement } from "./MainSvgElement"

const CartIconElement = () => {
    return(
        <MainSvgElement>
            <path
                d="M9 21.5C9.55228 21.5 10 21.0523 10 20.5C10 19.9477 9.55228 19.5 9 19.5C8.44772 19.5 8 19.9477 8 20.5C8 21.0523 8.44772 21.5 9 21.5Z"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M17 21.5C17.5523 21.5 18 21.0523 18 20.5C18 19.9477 17.5523 19.5 17 19.5C16.4477 19.5 16 19.9477 16 20.5C16 21.0523 16.4477 21.5 17 21.5Z"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M1.5 2.5H4.5L7.2 14.9C7.2935 15.3586 7.54485 15.7698 7.91028 16.0621C8.27572 16.3545 8.73211 16.5094 9.2 16.5H16.9C17.3679 16.5094 17.8243 16.3545 18.1897 16.0621C18.5552 15.7698 18.8065 15.3586 18.9 14.9L20.5 6.5H6.1"
                strokeWidth="2.2"
                strokeLinecap="round"
            />
        </MainSvgElement>
    )
}

export { CartIconElement }