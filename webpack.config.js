const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    // Configuración de los archivos JS
    entry: "./src/app/index.js",
    output: {
        path: path.join(__dirname, "docs"),  // Crea una carpeta llamada "disr" en el directorio donde se encuentra este archivo
        filename: "bundle.js"
    },

    // Configuración del servidor de desarrollo
    devServer: {
        port: 3000
    },

    // Reglas de webpack
    module: {
        rules: [    // Arreglo de configuraciones de módulos
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },

    // Configuración para copiar archivos HTML entre directorios
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
}