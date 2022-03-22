export default () => (
    [{
        type: "input",
        name: "packageName",
        message: "Set package name",
        default: () => 'ea-template-cli'
    }, {
        type: "input",
        name: "version",
        message: "Set ackage version",
        default: () => "1.0.0"
    }]
)