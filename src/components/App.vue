<script setup lang="ts">
// Import components
import CourseHeader from "@/components/CourseHeader.vue";
import CourseHero from "@/components/CourseHero.vue";
import CourseInfo from "@/components/CourseInfo.vue";
import CourseSyllabus from "@/components/CourseSyllabus.vue";
import CourseFooter from "@/components/CourseFooter.vue";
import TableOfContents from "@/components/TableOfContents.vue";
import NavigationHelper from "@/components/NavigationHelper.vue";

// Import data
import {
  courseInfo,
  weeks,
  groupMembers,
  otherGroups,
} from "@/data/courseData";
</script>

<template>
  <div class="min-h-screen text-foreground grow flex flex-col bg-gray-50">
    <CourseHeader />

    <!-- Two column layout for desktop -->
    <div class="flex flex-col lg:flex-row lg:container lg:mx-auto">
      <!-- Main content -->
      <main class="p-12 py-24 w-full lg:w-4/5">
        <CourseHero :course-info="courseInfo" />

        <CourseInfo
          :course-info="courseInfo"
          :group-members="groupMembers"
          :other-groups="otherGroups"
        />

        <CourseSyllabus :weeks="weeks" />
      </main>

      <!-- Table of Contents - Desktop sidebar -->
      <aside class="hidden lg:block w-1/5">
        <TableOfContents :weeks="weeks" />
      </aside>
    </div>

    <CourseFooter />

    <!-- Navigation helpers -->
    <NavigationHelper />
  </div>
</template>
