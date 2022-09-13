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
            v-if="activityItem.type === 'project'"
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
import FleetyardsLogo from "@/assets/images/logos/fleetyards.png";
import ReckoningLogo from "@/assets/images/logos/reckoning.png";
import MainEntry from "@/components/history/MainEntry.vue";
import SkillEntry from "@/components/history/SkillEntry.vue";
import type { Skill, ProjectOrPosition } from "@/views/HistoryView.vue";

const activity: (ProjectOrPosition | Skill)[] = [
  {
    type: "project",
    name: "Fleetyards.net",
    href: "https://fleetyards.net",
    imageUrl: FleetyardsLogo,
    description:
      "A web application to manage your fleet of ships in Star Citizen, an upcomming Multiplayer Online Game.",
    from: "November 2013",
  },
  {
    type: "skill",
    skills: [
      "Ruby",
      "Typescript",
      "Ruby on Rails",
      "VueJS",
      "PostgreSQL",
      "Sidekiq",
      "Redis",
      "Elasticserch",
      "Ansible",
      "OpenAPI",
      "Graphic and Logo Design",
      "Bootstrap",
    ],
  },
  {
    type: "project",
    name: "Reckoning",
    href: "https://reckining.me",
    imageUrl: ReckoningLogo,
    description: "Invoicing and Time Tracking for Freelancers",
    from: "August 2012",
  },
  {
    type: "skill",
    skills: [
      "Ruby",
      "Javascript",
      "Ruby on Rails",
      "AngularJS",
      "PostgreSQL",
      "Sidekiq",
      "Redis",
      "Ansible",
      "OpenAPI",
      "Objective-C",
      "iOS Development",
      "Bootstrap",
      "TailwindCSS",
    ],
  },
];
</script>
