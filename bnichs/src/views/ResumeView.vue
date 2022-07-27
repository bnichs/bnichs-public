<script setup lang="ts">
import JobBox from '@/components/JobBox.vue'
import TeamBox from '@/components/TeamBox.vue'
</script>



<template>
  <main>
    <h2>
      Resume
    </h2>

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
            Working for the Security org
          </template>
          <template #projects>
            <li>
              Built an ETL system for managing security data used for remediation
            </li>
            <li>
              Built various tools for managing the fleet handling security data
            </li>
            <li>
              Performed various operational duties to help harden the fleet and ensure security posture
            </li>
          </template>
        </TeamBox>
        <TeamBox>
          <template #team-name>
            Working for the Security Infrastructure org
          </template>
          <template #projects>
            <li>
              Redesigned the deployment process for the org's log management system, transitioned the team from manual deployments all done by hand for hundreds of hosts, to an automated system using a complete CI/CD pipeline
            </li>
            <li>
              Designed and built an automated backup system for log data
            </li>
            <li>
              Built tooling and testing methodologies for enabling and monitoring Selinux on the fleetWorking for the Security org:
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
              Built a monitoring system used to provide operational data used to help optimize the fleet
            </li>
            <li>
              Maintained the S3 Border toolchain including 30+ packages and ensured the tools we well tested and available for operational needs
            </li>
            <li>
              Designed the IP allocation scheme for IPV6 for S3 and built the toolchain for its rollout
            </li>
            <li>
              Designed and built the new DNS control plane for managing to vast scale of the border fleet
            </li>
            <li>
              Team lead and scrum master, assisted in onboarding and training engineers
            </li>
            <li>
              Assisted in hiring and building out the team
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
              Designed and developed automation for provisioning new hardware
            </li>
            <li>
              Designed and developed automation for managing IP addresses and allocating subnets
            </li>
            <li>
              Assisted in the launch of VPC Endpoints for S3 including building the toolchain as well as various operational services
            </li>
            <li>
              Co-Developed a metadata service for managing the frontend fleet and enabling a complete world view of the fleet and its assets
            </li>
          </template>
        </TeamBox>
      </template>
    </JobBox>

    <a class="" @click="toggleMore">
      Show older jobs....
    </a>

    <div class="extra-jobs" v-if="showMoreJobs">
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
  </main>
</template>


<script lang="ts">
export default {
  data() {
    return {
      showMoreJobs: true,
    };
  },
  methods: {
    toggleMore() {
      if (!this.showMoreJobs) {
        this.showMoreJobs =true;
      } else {
        this.showMoreJobs =false;
      }
    }
  }
};
</script>



<style scoped>

/*.job {*/
/*  border: 1px solid blue;*/
/*}*/

.company {
  /*font-size: 20px;*/
}

</style>
