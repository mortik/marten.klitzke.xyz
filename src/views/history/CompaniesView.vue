<template>
  <ul role="list" class="-mb-8">
    <li v-for="(activityItem, index) in activity" :key="index">
      <div class="relative pb-8">
        <span
          v-if="index !== activity.length - 1"
          class="absolute top-7 left-7 -ml-px h-full w-0.5 transition-colors duration-500 bg-gray-200 dark:bg-gray-500"
          aria-hidden="true"
        />
        <div class="relative flex items-start space-x-3">
          <MainEntry
            v-if="activityItem.type === 'position'"
            :item="activityItem"
          />
          <SkillEntry
            v-else-if="activityItem.type === 'skill'"
            :skills="activityItem.skills"
          />
        </div>
      </div>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import CostaLogo from "@/assets/images/logos/costa.svg";
import ShipcloudLogo from "@/assets/images/logos/shipcloud.png";
import MindmattersLogo from "@/assets/images/logos/mindmatters.png";
import SumcumoLogo from "@/assets/images/logos/sumcumo.svg";
import WeluseLogo from "@/assets/images/logos/weluse.png";
import Avatar from "@/assets/images/avatar.jpg";
import MainEntry from "@/components/history/MainEntry.vue";
import SkillEntry from "@/components/history/SkillEntry.vue";
import type { Skill, ProjectOrPosition } from "@/views/HistoryView.vue";

const activity: (ProjectOrPosition | Skill)[] = [
  {
    type: "position",
    name: "Freelance Software Developer",
    href: "https://marten.klitzke.xyz",
    imageUrl: Avatar,
    description: "Building applications for verying clients.",
    from: "October 2022",
  },
  {
    type: "skill",
    skills: [
      "Fullstack",
      "Ruby",
      "Typescript",
      "Vue.js",
      "Ruby on Rails",
      "OpenAPI",
      "GraphQL",
    ],
  },
  {
    type: "position",
    name: "Shipcloud GmbH",
    href: "https://www.shipcloud.io",
    imageUrl: ShipcloudLogo,
    description: "Building a shipping platform for e-commerce.",
    from: "December 2021",
    until: "September 2022",
  },
  {
    type: "skill",
    skills: [
      "Ruby",
      "Ruby on Rails",
      "Sidekiq",
      "OpenAPI",
      "Ansible",
      "PostgreSQL",
      "Redis",
      "Bootstrap",
    ],
  },
  {
    type: "position",
    name: "sum.cumo Sapiens GmbH",
    href: "https://sumcumo.com",
    imageUrl: SumcumoLogo,
    description:
      "Web Applications for Insurance Companies. Digitalization of Insurance Processes.",
    from: "May 2017",
    until: "November 2021",
  },
  {
    type: "skill",
    skills: [
      "Fullstack",
      "Ruby",
      "Typescript",
      "Vue.js",
      "Ruby on Rails",
      "GraphQL",
      "Kubernetes",
      "Docker",
      "AWS",
      "Helm",
      "RabbitMQ",
      "Redis",
      "Bootstrap",
      "Material Design Framework - Vuetify",
    ],
  },
  {
    type: "position",
    name: "Costa Digital Unit",
    href: "https://aida.de",
    imageUrl: CostaLogo,
    description:
      "Digitalization of the cruise industry. Building a mobile app (Android, iOS) for usage on board and in preperation for the cruise.",
    from: "February 2016",
    until: "April 2017",
  },
  {
    type: "skill",
    skills: [
      "Fullstack",
      "Go",
      "Javacript",
      "React Native",
      "GraphQL",
      "Component Driven Development",
      "Terraform",
      "Docker",
      "AWS",
      "iOS Development",
      "Android Development",
      "Native App Deployment",
      "bitrise.io",
    ],
  },
  {
    type: "position",
    name: "mindmatters GmbH & Co. KG",
    href: "https://mindmatters.de",
    imageUrl: MindmattersLogo,
    description: "Building web applications and mobile apps.",
    from: "April 2013",
    until: "January 2016",
  },
  {
    type: "skill",
    skills: [
      "Ruby",
      "Javascript",
      "OpenAPI",
      "Objective-C",
      "Ruby on Rails",
      "React",
      "iOS Development",
    ],
  },
  {
    type: "position",
    name: "Freelance Software Developer",
    href: "https://marten.klitzke.xyz",
    imageUrl: Avatar,
    description: "Building applications for verying clients.",
    from: "August 2012",
    until: "August 2016",
  },
  {
    type: "skill",
    skills: ["Fullstack", "Ruby", "Javascript", "Ruby on Rails"],
  },
  {
    type: "position",
    name: "weluse GmbH",
    href: "https://weluse.de",
    imageUrl: WeluseLogo,
    description: "Building web applications and online shops.",
    from: "June 2009",
    until: "March 2013",
  },
  {
    type: "skill",
    skills: [
      "Ruby",
      "Javascript",
      "PHP",
      "Ruby on Rails",
      "Cake PHP",
      "Bootstrap",
      "BackboneJS",
    ],
  },
];
</script>
