<template>
  <PageLayout>
    <PageHeader title="Imprint" backbutton />

    <h2
      class="mt-10 text-xl transition-colors duration-500 text-gray-900 dark:text-gray-300 sm:text-2xl md:text-3xl"
    >
      General Information (according to § 5 TMG)
    </h2>
    <address class="mt-5 text-gray-900 dark:text-gray-300">
      <p>
        <b>Address:</b>
        <br />
        Marten Klitzke
        <br />
        Lindenstraße 8b
        <br />
        22880 Wedel
        <br />
        Germany
      </p>
      <p class="mt-2">
        <b>Email:</b>
        <br />
        marten ( at ) klitzke.xyz
      </p>
    </address>

    <h2
      class="mt-10 text-xl transition-colors duration-500 text-gray-900 dark:text-gray-300 sm:text-2xl md:text-3xl"
    >
      Disclaimer
    </h2>
    <h3
      class="mt-10 text-lg transition-colors duration-500 text-gray-900 dark:text-gray-300 sm:text-xl md:text-2xl"
    >
      Copyright:
    </h3>
    <p class="mt-5 text-gray-900 dark:text-gray-300">
      The contents and works created by the page operators, on these pages are
      subject to German copyright. Duplication, processing, distribution and any
      kind of exploitation outside the limits of Copyright require the written
      consent of the respective author or creator. Downloads and copies of this
      page are only for private, non-commercial use. Insofar as the content on
      This page was not created by the operator, are third-party copyrights
      respected. In particular, Third-party content as such. Please Contact us
      if you notice any sort of copyright infringement. We will remove any
      content immediately as we become aware of such violations.
    </p>

    <h3
      class="mt-10 text-lg transition-colors duration-500 text-gray-900 dark:text-gray-300 sm:text-xl md:text-2xl"
    >
      Limitation of liability for internal content:
    </h3>
    <p class="mt-5 text-gray-900 dark:text-gray-300">
      The content of out site has been compiled with meticulous care and to the
      best of our knowledge. However, We cannot assume any liability for the
      up-to-dateness, completeness or accuracy of any of the pages.
    </p>
    <p class="mt-5 text-gray-900 dark:text-gray-300">
      Pursuant to section 7, para. 1 of the TMG (Telemediengesetz), We are
      liable for our own content on these pages in accordance with general laws.
      However, pursuant to sections 8 to 10 of the TMG, We are not under
      obligation to monitor external information provided or stored on our site.
      Once We have become aware of a specific infringement of the law, We will
      immediately remove the content in question. Any liability concerning this
      matter can only be assumed from the point in time at which the
      infringement becomes known to us.
    </p>
    <h3
      class="mt-10 text-lg transition-colors duration-500 text-gray-900 dark:text-gray-300 sm:text-xl md:text-2xl"
    >
      Limitation of liability for external links:
    </h3>
    <p class="mt-5 text-gray-900 dark:text-gray-300">
      My site contains links to websites of third parties (“external links”). As
      the content of these sites is not under our control, We cannot assume any
      liability for such external content. In all cases, the provider of
      information of the linked sites is liable for the content and accuracy of
      the information provided. At the point in time when the links were placed,
      no infringements of the law were recognisable to us. As soon as an
      infringement of the law becomes known to us, We will immediately remove
      the link in question.
    </p>
  </PageLayout>
</template>

<script lang="ts" setup>
import PageLayout from "@/layouts/PageLayout.vue";
import PageHeader from "@/components/PageHeader.vue";
</script>
