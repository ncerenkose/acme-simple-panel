# Grafana panel plugin template
# Acme Simple Panel Plugin

I developed this project as part of my course assignment to create a custom Grafana **Panel Plugin**. The plugin was built using Grafana’s official plugin tools and runs inside a local Grafana development environment.

In this project, my main goal was to successfully create a working panel plugin, integrate it into Grafana, and clearly display my name inside the panel interface.

The panel renders a simple visual shape that can be either a circle or a square. I added several configuration options so the panel can be customized directly from the Grafana UI. Users can change the accent color of the shape, switch between circle and square modes, and optionally display the number of data series.

I also implemented basic interactivity in the panel. When the user hovers over the shape, its appearance changes by reducing opacity and increasing stroke thickness. When the shape is clicked, a small “Clicked!” message appears inside the panel. These interactions demonstrate simple state handling inside a Grafana panel plugin.

The panel was designed to be responsive. The size of the rendered shape dynamically adapts to the panel’s width and height, so resizing the panel in the dashboard automatically resizes the visualization as well.

The plugin builds successfully and loads correctly inside Grafana. My name is clearly visible inside the panel as **“Developed by N. Ceren Köse”**, which confirms that the custom panel code is running as expected.

## Running the plugin locally

To run the plugin locally, I navigated to the plugin directory, installed the dependencies, and started the development environment using the following commands:

```bash
cd mainorg-acmesimple-panel
npm install
npm run dev
docker compose up
```
After starting the development server, I opened http://localhost:3000
, created a new dashboard, added a new panel, and selected Acme-Simple-Panel from the visualization list.

Submission notes

As part of the submission, I included a screenshot showing the plugin running inside Grafana with my name visible in the panel. I also recorded a short demo video (around 1–2 minutes) where I demonstrate the panel options, hover and click interactions, and the responsive resizing behavior.

Regarding bonus features, I focused on panel-level enhancements such as configuration options, interactivity, and responsive design. I did not implement Data Source Plugin features like reading data from a REST API, defining query parameters, or converting API responses into time-series or table formats. These features require implementing a separate Data Source Plugin architecture and were intentionally left out of scope for this project.

Overall, this project demonstrates a complete and functional Grafana Panel Plugin that meets all core requirements and includes selected bonus features.

Author: N. Ceren Köse
GitHub Repository: https://github.com/ncerenkose/acme-simple-panel