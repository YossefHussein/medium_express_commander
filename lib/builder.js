const fs = require('fs-extra')
const path = require('path')
const ejs = require('ejs')

const templatePath = path.join(__dirname, '../templates/middleware.template.js')

async function buildMiddleware(name, options) {
  try {
    // Ensure output directory exists
    await fs.ensureDir(options.dir)

    // Read template
    const template = await fs.readFile(templatePath, 'utf-8')

    // Render template with data
    const output = ejs.render(template, {
      middlewareName: name,
      isRouteMiddleware: options.type === 'route',
    })

    // Write output file
    const outputPath = path.join(options.dir, `${name}.middleware.js`)
    await fs.writeFile(outputPath, output)

    console.log(`Successfully created middleware at ${outputPath}`)
  } catch (err) {
    console.error('Error creating middleware:', err)
    process.exit(1)
  }
}

module.exports = {
  buildMiddleware,
}
