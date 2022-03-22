export default () => {
    return {
        type: "checkbox",
        name: "middleware",
        choices: [
            {
                name: "static",
                default: () => true
            },
            {
                name: "router",
                default: () => false
            }
        ]
    }
}