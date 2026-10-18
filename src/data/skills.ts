// =================================================================
// SKILLS DATA
// =================================================================
// To add or rename a skill, edit the arrays below. Each category
// has a title and a list of skill names shown as badges.
// No skill levels or percentages — just clean groupings.
// =================================================================

export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Electronics & PCB Design',
    skills: [
      'Analog Circuits',
      'Digital Circuits',
      'PCB Design',
      'Schematic Design',
      'Soldering',
      'Oscilloscope',
      'Logic Analyzer',
      'Power Electronics',
    ],
  },
  {
    title: 'Microcontrollers & Embedded Systems',
    skills: [
      'STM32',
      'ESP32',
      'Arduino',
      'ARM Cortex-M',
      'AVR',
      'PIC',
      'I2C',
      'SPI',
      'UART',
      'ADC / DAC',
    ],
  },
  {
    title: 'Firmware Development',
    skills: [
      'C',
      'C++',
      'Embedded C',
      'Python',
      'FreeRTOS',
      'Bare-Metal Programming',
      'Interrupts',
      'DMA',
      'Linker Scripts',
    ],
  },
  {
    title: 'IoT & Connectivity',
    skills: [
      'Wi-Fi',
      'BLE',
      'MQTT',
      'ESP-IDF',
      'TinyML',
      'Edge AI',
    ],
  },
  {
    title: 'Tools & Software',
    skills: [
      'KiCad',
      'Altium Designer',
      'STM32CubeIDE',
      'PlatformIO',
      'Git',
      'OpenOCD',
      'ST-Link',
      'Keil MDK',
    ],
  },
];
