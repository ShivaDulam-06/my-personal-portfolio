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
// =================================================================

export interface Project {
  title: string;
  description: string;
  tech: string[];
  status: 'Coming soon' | 'In progress' | 'Completed';
}

export const projects: Project[] = [
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
