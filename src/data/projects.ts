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
//   featured    — Optional: marks the project shown in the homepage
//                 "Featured Engineering Work" section.
//   anchor      — Optional: id used to deep-link to a project card.
//   hasDetails  — Optional: when true, the card shows a "View
//                 Details" trigger that opens the reusable modal.
//                 Only set this when genuine, documented detail
//                 content exists — never fabricate details.
//   detail      — Optional: structured sections rendered inside the
//                 project-detail modal (objectives, architecture,
//                 hardwareInterfaces, firmwareImplementation,
//                 learningOutcomes). Reused alongside overview,
//                 stack, and simulationNote.
//   stack       — Optional: structured technology stack, grouped.
//   overview    — Optional: fuller technical overview for the modal.
//   simulationNote — Optional: explicit simulation disclosures.
// =================================================================

export interface TechGroup {
  label: string;
  items: string[];
}

export interface ProjectDetail {
  objectives?: string;
  architecture?: string;
  hardwareInterfaces?: string;
  firmwareImplementation?: string;
  learningOutcomes?: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  status: 'Coming soon' | 'In progress' | 'Completed';
  link?: string;
  featured?: boolean;
  anchor?: string;
  hasDetails?: boolean;
  detail?: ProjectDetail;
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
    hasDetails: true,
    overview:
      'An ESP32-based sensor node built and simulated in Wokwi that samples soil moisture, ambient light, temperature, and humidity, timestamps each reading via a DS1307 RTC, and displays live status on a 20x4 I2C LCD. When the soil reading crosses a dryness threshold, the firmware automatically drives a relay to switch a simulated water pump.',
    detail: {
      objectives:
        'Build a self-contained ESP32 sensor node that monitors key agricultural parameters — soil moisture, ambient light, temperature, and humidity — and performs local, on-device control of a water pump without relying on cloud connectivity. The project was developed as a UCT internship submission and simulated end-to-end in Wokwi.',
      architecture:
        'The ESP32 is the central controller. Three input devices feed it environmental data: a DHT22 (temperature and humidity) on a digital pin, an LDR module (ambient light) on an analog pin, and a potentiometer (standing in for the FC-28 soil-moisture sensor) on a second analog pin. A DS1307 real-time clock and a 20x4 I2C LCD share the same I2C bus (SDA/SCL) so every reading can be timestamped and displayed live. The ESP32 drives a relay module from a digital output to switch the simulated water pump, with an orange LED on the relay COM line acting as a pump-on indicator and a red LED marking a low-light condition.',
      hardwareInterfaces:
        'DHT22 — single-wire digital input for temperature and humidity. LDR module — analog voltage read by the ESP32 ADC, converted using the ESP32\u2019s 12-bit ADC characteristics and the standard photoresistor resistance/lux relationship, then bucketed into Low / Medium / High. Potentiometer (FC-28 proxy) — analog voltage representing soil wetness; Wokwi has no FC-28 component, so the potentiometer produces the same voltage swing a real FC-28 probe would. DS1307 RTC — I2C, provides timestamps for each reading. 20x4 I2C LCD — I2C, displays live sensor status and pump state. Relay module — digital output from the ESP32 switches the relay; the relay COM line drives the simulated pump and the orange pump-on indicator LED. A red LED on a separate digital output indicates low ambient light.',
      firmwareImplementation:
        'Written in Arduino C++ using the LiquidCrystal I2C, DHT sensor, and RTClib libraries, plus a small FC28 driver (FC28.cpp / FC28.h). The main sketch (main.ino) runs a loop that samples each sensor, timestamps the reading with the RTC, updates the 20x4 LCD, and evaluates a soil-moisture threshold: when the soil reading crosses the dryness threshold the firmware energizes the relay to start the pump, and de-energizes it once the reading returns to an acceptable range. The FC28 driver documents an important convention \u2014 getSoilMoisture() returns a higher percentage for drier soil, not wetter, matching how the sensor is wired as a voltage divider; the pump logic is written against that convention and the behavior is noted in FC28.h so it is not mistaken for a bug. The Wokwi circuit and wiring are defined in diagram.json, and libraries.txt lists the dependencies Wokwi loads at simulation time.',
      learningOutcomes: [
        'Interfacing multiple mixed-signal sensors (digital, analog, I2C) with a single microcontroller and sharing an I2C bus between two devices.',
        'Designing threshold-based local control logic that runs entirely on-device, with no dependency on network connectivity.',
        'Working around simulator limitations by substituting a potentiometer for an unavailable component while keeping the firmware pin-compatible with the real sensor.',
        'Documenting a non-obvious sensor convention (drier-soil returns a higher percentage) inside the driver header so it is not treated as a bug.',
      ],
    },
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
