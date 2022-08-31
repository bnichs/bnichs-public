<script setup lang="ts">
import JobBox from '@/components/JobBox.vue'
import GoToTop from '@/components/GoToTop.vue'
import TeamBox from '@/components/TeamBox.vue'
import SkillsBox from '@/components/SkillsBox.vue'
import MainBox from '@/components/MainBox.vue'
import QRCode from '@/components/QRCode.vue'
import ContactLinks from '../components/ContactLinks.vue'

import {PERSON_NAME, PERSON_SUBTITLE} from "@/config";
</script>



<template>
  <MainBox id="resume">
    <template #title>
      Resume
<!--      <div id="ResumeHeader">-->
<!--      </div>-->

    </template>

    <template #content>
      <div id="ResumePrintHeader" class="row">
        <div class="resumeTitle col-md-auto">
          <h1>
            {{ PERSON_NAME }}
          </h1>
        </div>

        <div class="resumeContact col-md-auto">
          <ContactLinks :showLinkedin="false" :showCard="false" :showGitHub="false">
          </ContactLinks>
        </div>

        <div class="resumeQR col-md-auto">
          <QRCode :size="150"></QRCode>
        </div>


      </div>


      <button id="printButton" class="button" @click="pprint();" >
        Print
      </button>
      <ul class="resume-nav">
        Navigation:
        <a href="/resume/#ResumeJobs">
          <li>
            Jobs
          </li>
        </a>
        <a href="/resume/#ResumeSkills">
          <li>
            Skills
          </li>
        </a>
        <a href="/resume/#ResumeEducation">
          <li>
            Education
          </li>
        </a>
      </ul>

      <div style="clear:both;"></div>

      <h3 id="ResumeJobs">Jobs</h3>
      <JobBox>
        <template #company>
          Oracle
        </template>
        <template #role>
          Principal Software Developer
        </template>
        <template #dates>
          Oct 2018 - Jan 2022<br>3 yrs 4 mos
        </template>
        <template #location>
          Seattle, Washington
        </template>
        <template #skills>
          <li>Python</li>
          <li>Terraform</li>
          <li>Bash</li>
          <li>OracleDB</li>
          <li>CI/CD (proprietary tooling)</li>
          <li>Golang</li>
        </template>

        <template #teams>

          <TeamBox>
            <template #team-name>
              Security Infrastructure (SIEM)
            </template>
            <template #dates>
              Nov 2019 - Jan 2022<br>2 yrs 3 mos
            </template>
            <template #projects>
              <li>
                Redesigned the deployment process for the org's log management system, transitioned the team from manual deployments all done by hand for hundreds of hosts, to an automated system using a complete CI/CD pipeline.
              </li>
              <li>
                Built automation for migrating between logging systems including automated deployments, data transfer/ingestion, and integrating compliance requirements.
              </li>
              <li>
                Wrote a debugging tool for clients to provide better information during incidents.
              </li>
              <li>
                Built tooling and testing methodologies for enabling and monitoring Selinux on the fleet.
              </li>
            </template>
          </TeamBox>

          <TeamBox>
            <template #team-name>
              Threat and Vulnerability Management
            </template>
            <template #dates>
              Oct 2018 - Nov 2019<br>1 yrs 1 mos
            </template>
            <template #projects>
              <li>
                Built an ETL system for managing security data used for remediation. Ingested data from various security tools into our vulnerability database.
              </li>
              <li>
                Built various tools for managing the fleet handling security data including deployment and debugging.
              </li>
              <li>
                Performed operational duties to help harden the fleet and ensure security posture.
              </li>
            </template>
          </TeamBox>

        </template>
      </JobBox>

      <JobBox>
        <template #company>
          Amazon Web Services - S3
        </template>
        <template #role>
          System Engineer / SysDev II
        </template>
        <template #dates>
          July 2014 - Sept 2018<br>
          4 yrs 3 mos
        </template>
        <template #location>
          Seattle, WA
        </template>
        <template #skills>
          <li>Python</li>
          <li>Bash</li>
          <li>Scala</li>
          <li>Git</li>
          <li>CI/CD (proprietary tooling)</li>
        </template>

        <template #teams>
          <TeamBox>
            <template #role>
              System Development Engineer II
            </template>
            <template #team-name>
              S3 Border
            </template>
            <template #team-subtitle>
              Networking and Load Balancing for S3's frontend
            </template>
            <template #dates>
              Feb 2016 - Sep 2018<br>2 yrs 8 mos
            </template>
            <template #projects>
              <li>
                Built a monitoring system used to provide operational data used to help optimize the fleet.
              </li>
              <li>
                Maintained the S3 Border toolchain including 30+ packages and ensured the tools we well tested and available for operational needs.
              </li>
              <li>
                Designed the IP allocation scheme for IPV6 for S3 and built the toolchain for its rollout.
              </li>
              <li>
                Designed and built the new DNS control plane for managing to vast scale of the border fleet.
              </li>
              <li>
                Team lead and scrum master, onboarding and training engineers
              </li>
              <li>
                Assisted in interviewing, hiring, and building out the team
              </li>
            </template>
          </TeamBox>
          <TeamBox>
            <template #role>
              System Engineer
            </template>
            <template #team-name>
              S3 Border
            </template>
            <template #team-subtitle>
              Networking and Load Balancing for S3's frontend
            </template>
            <template #dates>
              Jul 2014 - Feb 2016<br>1 yr 8 mos
            </template>
            <template #projects>
              <li>
                Designed and developed automation for provisioning new hardware.
              </li>
              <li>
                Designed and developed automation for managing IP addresses and allocating subnets.
              </li>
              <li>
                Worked on the launch of VPC Endpoints for S3 including building the toolchain as well as various operational services.
              </li>
              <li>
                Co-Developed a metadata service for managing the frontend fleet and enabling a complete world view of the fleet and its assets.
              </li>
            </template>
          </TeamBox>
        </template>
      </JobBox>

      <a id="showMoreJobsButton" class="" @click="toggleMore">
        Show older jobs....
      </a>

      <div style="clear:both;"></div>

      <div id="extra-jobs" v-bind:style="{display: showJobsDisplay}">
        <JobBox>
          <template #company>
            Ben Nichols
          </template>
          <template #role>
            Sysadmin/Web developer
          </template>
          <template #location>
            Remote
          </template>
          <template #job-description>
            Worked as sole sysadmin and web developer for several small companies
          </template>
          <template #dates>
            May 2012 - Jul 2014 · 2 yrs 3 mos
          </template>
          <template #teams>
            <TeamBox>
              <template #projects>
                <li>
                  Santa Barbara FoodBank -- Designed and implemented a website used to track food resources and their locations throughout the county.
                </li>
                <li>
                  Gambies - Complete website redesign to customers specifications. Included software upgrades to current standards. Included purchasing ability and paypal integration.
                </li>
                <li>
                  Conditioning Leaders - Complete website redesign to customers specifications. Included software upgrades to current standards.
                </li>
                <li>
                  In Balance Coaching - Complete website redesign to customers specifications. Included software upgrades to current standards.
                </li>
              </template>
            </TeamBox>
          </template>

          <template #skills>
            <li>Wordpress</li>
            <li>PHP</li>
            <li>HTML/CSS/Javascript</li>
          </template>

        </JobBox>

        <JobBox>
          <template #company>
            Carlson Software
          </template>
          <template #role>
            Software Engineering Intern
          </template>
          <template #dates>
            May 2013 - Sep 2013
            <br>
            5 mos
          </template>
          <template #location>
            Watertown, MA
          </template>
          <template #job-description>
            Worked mainly making a 3d CAD model viewer for Android.
          </template>
          <template #skills>
            <li>Android</li>
            <li>Java</li>
            <li>Java Native Interface</li>
          </template>
        </JobBox>
      </div>

      <hr>
      <div class="resumeHeading" id="ResumeSkills">
        <h3>Skills</h3>
        <GoToTop></GoToTop>
      </div>
<!--      <h3 class="resumeHeading" id="ResumeSkills">Skills</h3>-->

      <div style="clear:both;"></div>
      <SkillsBox></SkillsBox>

      <hr>
<!--      <h3 class="resumeHeading" id="ResumeEducation">Education</h3>-->
<!--      <GoToTop></GoToTop>-->

      <div class="resumeHeading" id="ResumeEducation">
        <h3>Education</h3>
        <GoToTop></GoToTop>
      </div>
      <div style="clear:both;"></div>
      <JobBox>
        <template #company>
          Boston University
        </template>
        <template #role>
          Bachelors of Science (BS) in Computer Engineering
        </template>
        <template #dates>
          2010 - 2014
        </template>
        <template #location>
          Boston, MA
        </template>
        <template #job-description>
          Studied Computer Engineering which focused on a mix of Electrical Engineering, Computer Architecture, and Programming.
        </template>
      </JobBox>

      <JobBox>
        <template #company>
          Phillips Academy Andover
        </template>
        <template #role>
          Highschool Degree
        </template>
        <template #dates>
          2006 - 2010
        </template>
        <template #location>
          Andover, MA
        </template>
        <template #job-description>
          Heavy math and science focus. First learned programming on a Ti-84 and then decided to teach myself java after liking it so much.
        </template>
      </JobBox>

      <div style="clear:both;"></div>
    </template>
  </MainBox>
</template>


<script lang="ts">
import {defineComponent} from "vue";
import {setScheme} from "@/dark";

export default defineComponent({
  data() {
    return {
      // goToTop: '<div class="goToTop"><p>Go to\n      <a href="/resume/#ResumeHeader">top</a>.\n    </p></div>',
      showMoreJobs: false,
      // displayExtraJobs: "none",
    };
  },
  computed: {
    showJobsDisplay(){
      if (this.showMoreJobs){
        return "unset"
      }else {
        return "none"
      }
    }
  },
  methods: {
    async pprint(){
      let scheme = "light"
      setScheme(scheme)
      await this.$forceUpdate()
      window.print()
    },
    toggleMore() {
      const d = document.getElementById("extra-jobs");

      if (d !== null){

        if (d.style.display === "" || d.style.display == "unset"){
          d.style.display = "none";
        } else if (d.style.display === "none"){
          d.style.display = "unset";
        }
      }
    }
  }
});
</script>



<style>
#resume{
  font-size: 1.4rem;
  /*page-break-inside: avoid;*/
}

#resume .main-content {
  margin: 3em auto auto auto;
}

#printButton{
  float: right
}

.goToTop {
  /*margin: 10px 0 0 30px;*/
  float: left;
}


.goToTop, .resumeHeading h3 {
  /*margin-top: 1em;*/
}


#ResumeHeader {
  /*float: left;*/
  width: 30%;
  /*display: none;*/
}

.pageTitleLine {
  display: none;
}

.resumeHeading{
  /*width: fit-content;*/
  /*float: left;*/
  margin: 2vh 0 0 0;
}

.resumeHeading .goToTop{
  float: right
}

.resumeHeading h3{
  float: left;
}

#ResumePrintHeader{
  border-bottom: 1px solid var(--color-border);
  margin-top: 10px;
  margin-bottom: 1vh;
}

#ResumePrintHeader .col-md-auto {
  padding: 0px;
}

.resumeTitle {
  width: 35%;
  /*padding-top: 1.1em !important;*/
}

.resumeTitle h1{
  font-size: 1.7em;
}

.resumeContact {
  width: 55%;
  font-size: .9em;
}

.resumeContact .contact {
  display: inline-block;
  margin: 0 0 0 1rem;
}

.resumeContact .details{
  margin-left: .5rem;
}


.resumeContact .item {
  margin: 0 0 5px 0;
}

.resumeContact h3 {
  margin: 0 0 1px 0;
}

.resumeQR {
  width: 10%;
  float: right;
}

.resumeQR canvas {
  width: 3.5em !important;
  /*min-width: 1in !important;*/
  height: auto !important;
}

.resume-nav{
  width: fit-content;
  float: left;
  padding: 5px 0 0 0;
}

.resume-nav li {
  display: inline;
  margin: 10px;
}

.project-list li {
  page-break-inside: avoid;
}


@media (max-width: 1024px){
  .where-and-when {
    padding: 1vh 0 0 0;
  }

  .job {
    /*margin: 0 !important;*/
  }

  .skill-box{
    border-left: none !important;
  }

  .team-box{
    margin: 1vh 0 0 0 !important;
    padding: 1vh 1vw 1vh 1vw;
  }

  .team-role {
    padding-top: 1vh !important;
  }

  .where-and-when {
    padding: 0 2vw 0 0vw;
  }

  .project-list {
    margin: 0 !important;
  }
}


@media print {
  @page { margin: 0; }

  html, body { height: 99%; }

  body {
    display: unset;
  }

  /*body {*/
  /*  page-break-inside: avoid;*/
  /*}*/

  /*Helps with page breaks for some reason*/
  #resume, .team-box, .where-and-when {
    border: 2px solid hsla(120, 58%, 23%, 0.00);
  }

  header {
    display: none;
  }


  #ResumePrintHeader{
    margin-top: 0px;
    margin-bottom: .1in;
  }

  #printButton{
    display: none;
  }

  .resume-nav {
    display: none;
  }


  #app{
    width: 8.5in;
    height: fit-content;
    margin: 0;
    padding: 0 .5in 0 .1in;
  }

  main{
    width: 8.5in;
    margin-top: 0px;
  }

  .job{
    margin-top: .05in !important;
    /*page-break-after: avoid;*/
  }

  .job-header{
    margin-bottom: 0 !important;
  }

  .team-box{
    margin-bottom: 0 !important;
  }

  .goToTop {
    display: none;
  }

  #showMoreJobsButton {
    display: none;
  }


  footer {
    display: none !important;
  }

  #ResumeEducation{
    margin: 0px;

  }
  #ResumeSkills{
    /*margin: .3in 0 0 0 ;*/
  }

  .team-box {
    /*padding-top: 0px !important;*/
    margin-top: 0px !important;
  }

  hr {
    display: none;
  }

  /*#extraJobs {*/
  /*  display: unset;*/
  /*}*/
}
</style>
