<script setup lang="ts">
// Import components
import CourseHeader from '@/components/CourseHeader.vue';
import CourseHero from '@/components/CourseHero.vue';
import CourseInfo from '@/components/CourseInfo.vue';
import CourseSyllabus from '@/components/CourseSyllabus.vue';
import CourseFooter from '@/components/CourseFooter.vue';
import TableOfContents from '@/components/TableOfContents.vue';
import NavigationHelper from '@/components/NavigationHelper.vue';

// Import data
import { courseInfo, weeks, groupMembers, otherGroups } from '@/data/courseData';
</script>

<template>
  <div class="min-h-screen text-foreground grow flex flex-col bg-gray-50">
    <CourseHeader />

    <div class=" ">
      <!-- Two column layout for desktop -->
      <div class="grid grid-cols-1 lg:grid-cols-12 ">
        <!-- Main content -->
        <main class="lg:col-span-10  p-12 py-24">
          <CourseHero :course-info="courseInfo" />
          
          <CourseInfo 
            :course-info="courseInfo"
            :group-members="groupMembers"
            :other-groups="otherGroups"
          />
          
          <CourseSyllabus :weeks="weeks" />
        </main>

        <!-- Table of Contents - Desktop sidebar -->
        <aside class="lg:col-span-2 order-first lg:order-last">
          <TableOfContents :weeks="weeks" />
        </aside>
      </div>
    </div>

    <CourseFooter />
    
    <!-- Navigation helpers -->
    <NavigationHelper />
  </div>
</template>


