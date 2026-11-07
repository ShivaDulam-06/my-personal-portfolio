// =================================================================
// PROJECTS DATA
// =================================================================
// To add a new project, copy one of the entries below and change
// the fields. The layout will handle the rest automatically.
//
// Fields:
//   title       — Project name
//   description — One or two sentences describing the project
//   tech        — List of technologies/tools used
//   status      — "Coming soon" | "In progress" | "Completed"
//   link        — Optional: URL to this project's own repo/demo.
//                 If omitted, the card falls back to the general
//                 GitHub profile link.
//   featured    — Optional: marks a project for the expanded,
//                 two-column layout on the Projects page and the
//                 "Featured Engineering Work" card on the homepage.
//   anchor      — Optional: id used to deep-link to a specific
//                 project card (e.g. /projects#smart-agriculture).
//   stack       — Optional: structured technology stack for the
//                 featured project, grouped by category.
//   overview    — Optional: a fuller technical overview shown on
//                 the featured card (separate from the short
//                 description used by the standard cards).
//   simulationNote — Optional: explicit simulation disclosures
//                 shown on the featured card.
// =================================================================

export interface TechGroup {
  label: string;
  items: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  status: 'Coming soon' | 'In progress' | 'Completed';
  link?: string;
  featured?: boolean;
  anchor?: string;
  stack?: TechGroup[];
  overview?: string;
  simulationNote?: string[];
}

export const projects: Project[] = [
  {
    title: 'IoT-Based Smart Agriculture Monitoring System using DAMS',
    description:
      'An ESP32 sensor node (UCT internship project) that reads soil moisture, light level, temperature, and humidity, timestamps each reading via RTC, displays live status on an I2C LCD, and automatically switches a relay-driven water pump when soil moisture crosses a dryness threshold.',
    tech: ['ESP32', 'Arduino C++', 'Wokwi', 'Sensors', 'I2C', 'RTC'],
    status: 'Completed',
    link: 'https://github.com/ShivaDulam-06/upskillcampus',
    featured: true,
    anchor: 'smart-agriculture',
    overview:
      'An ESP32-based sensor node built and simulated in Wokwi. The firmware samples a DHT22 for temperature and humidity, an LDR module for ambient light, and a potentiometer that stands in for the FC-28 soil-moisture sensor. Each reading is timestamped by a DS1307 RTC and shown on a 20x4 I2C LCD. When the soil reading crosses a dryness threshold, the ESP32 drives a relay module to switch a simulated water pump, with an orange LED acting as a pump-on indicator.',
    stack: [
      { label: 'Board', items: ['ESP32'] },
      { label: 'Language / Framework', items: ['Arduino C++'] },
      { label: 'Simulation', items: ['Wokwi'] },
      { label: 'Sensors', items: ['DHT22 (temp/humidity)', 'LDR (ambient light)', 'Potentiometer (FC-28 proxy)'] },
      { label: 'Bus', items: ['I2C'] },
      { label: 'Display', items: ['20x4 I2C LCD'] },
      { label: 'Output', items: ['Relay-driven pump', 'Orange LED indicator'] },
    ],
    simulationNote: [
      'The FC-28 soil-moisture sensor is represented by a potentiometer in the Wokwi simulation — Wokwi has no built-in FC-28 component. Swapping the potentiometer for a real FC-28 probe on physical hardware requires no code changes.',
      'This version does not implement Wi-Fi or MQTT connectivity. Readings are displayed locally and the pump is controlled by on-device logic only.',
      'This project is simulation-based and should not be represented as physically validated hardware.',
    ],
  },
  {
    title: 'STM32 Sensor Node',
    description:
      'A low-power sensor acquisition node built around an STM32 microcontroller, sampling environmental data and transmitting it over UART.',
    tech: ['STM32', 'C', 'UART', 'Sensors'],
    status: 'In progress',
  },
  {
    title: 'ESP32 Wi-Fi Telemetry Board',
    description:
      'A custom PCB featuring an ESP32 module that collects telemetry data and pushes it to a cloud dashboard over Wi-Fi.',
    tech: ['ESP32', 'PCB Design', 'IoT', 'Wi-Fi', 'MQTT'],
    status: 'Coming soon',
  },
  {
    title: 'FreeRTOS Task Scheduler Demo',
    description:
      'A demonstration of preemptive multitasking on an ARM Cortex-M microcontroller using FreeRTOS, with inter-task communication via queues.',
    tech: ['FreeRTOS', 'ARM Cortex-M', 'C'],
    status: 'Coming soon',
  },
  {
    title: 'Bare-Metal Bootloader',
    description:
      'A lightweight bootloader written from scratch for an ARM microcontroller, covering vector table setup, memory initialization, and application handoff.',
    tech: ['ARM', 'Bare-Metal C', 'Linker Scripts'],
    status: 'Coming soon',
  },
];
