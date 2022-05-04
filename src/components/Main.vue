<template>
    <div>
        <Navbar @onScroll="goTo" />
        <Welcome />
        <Addvertisment ref="add" />
        <Reasons ref="reasons" />
        <Services ref="services"/>
        <!-- <Team ref="team" /> -->
        <Cases ref="cases" />
        <Section/>
        <Footer ref="footer" />
    </div>
</template>

<script>
import Navbar from './Navbar/Navbar.vue';
import Welcome from './Welcome.vue';
import Addvertisment from './Addvertisment.vue';
import Reasons from './Reasons.vue';
import Services from './Services/Services.vue';
import Team from './Team.vue';
import Cases from './Cases/Cases.vue';
import Section from './Section.vue';
import Footer from './Footer.vue';

export default {
    name: 'Main',
    components: {
        Navbar,
        Welcome,
        Addvertisment,
        Reasons,
        Services,
        Team,
        Cases,
        Section,
        Footer,
    },
    created() {
        window.onscroll = () => {
            this.$refs.add.setParallax();
            this.$refs.reasons.setParallax();
            // this.$refs.team.setParallax();
        }
    },
    methods: {
        goTo(ref) {
            this.$refs[ref].goTo();
        }
    },
}
</script>