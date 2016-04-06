import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
    (function addModuleIfEmpty(){
        if(Modules.find().count() == 0){
            var modules = [
                {id: "MH1812", code: "MH1812", name: "Discrete Mathematics" },
                {id: "HW0001", code: "HW0001", name: "English Proficiency" },
                {id: "HW0188", code: "HW0188", name: "Engineering Communication I" },
                {id: "HW0288", code: "HW0288", name: "Engineering Communication" },
                {id: "GC0001", code: "GC0001", name: "Introduction to Sustainability: Multidisciplinary Approaches and Solutions" },
                {id: "ET0001", code: "ET0001", name: "Enterprise & Innovation" },
                {id: "ML0001", code: "ML0001", name: "Absolute Basics for Career by MLCPS (Margaret Lien Centre for Professional Success)" },
                {id: "ML0002", code: "ML0002", name: "Career Power Up! by MLCPS" },
                {id: "GC0002", code: "GC0002", name: "Ethics & Moral Reasoning" },
                {id: "CX0001", code: "CZ0001", name: "Engineers and Society" },
                {id: "CX0001", code: "CE0001", name: "Engineers and Society" },
                {id: "CX1002", code: "CZ1002", name: "Introduction to Computing Systems" },
                {id: "CX1003", code: "CZ1003", name: "Introduction to Computational Thinking" },
                {id: "CX1004", code: "CZ1004", name: "Great Ideas in Computing" },
                {id: "CX1005", code: "CZ1005", name: "Digital Logic" },
                {id: "CX1006", code: "CZ1006", name: "Computer Organisation and Architecture" },
                {id: "CX1007", code: "CZ1007", name: "Data Structures" },
                {id: "CX1008", code: "CZ1008", name: "Engineering Mathematics" },
                {id: "CX2001", code: "CZ2001", name: "Algorithms" },
                {id: "CX2002", code: "CZ2002", name: "Object Oriented Design & Programming" },
                {id: "CZ2003", code: "CZ2003", name: "Computer Graphics and Visualisation" },
                {id: "CZ2004", code: "CZ2004", name: "Human Computer Interaction" },
                {id: "CX2005", code: "CZ2005", name: "Operating Systems" },
                {id: "CX2006", code: "CZ2006", name: "Software Engineering" },
                {id: "CZ2007", code: "CZ2007", name: "Introduction to Databases" },
                {id: "CX3001", code: "CZ3001", name: "Advanced Computer Architecture" },
                {id: "CZ3002", code: "CZ3002", name: "Advanced Software Engineering" },
                {id: "CZ3003", code: "CZ3003", name: "Software Systems Analysis and Design" },
                {id: "CX3004", code: "CZ3004", name: "Multidisciplinary Design Project" },
                {id: "CZ3005", code: "CZ3005", name: "Artificial Intelligence" },
                {id: "CZ3006", code: "CZ3006", name: "Net Centric Computing" },
                {id: "CZ3007", code: "CZ3007", name: "Compiler Techniques" },
                {id: "CX4011", code: "CZ4011", name: "Parallel Computing" },
                {id: "CX4013", code: "CZ4013", name: "Distributed Systems" },
                {id: "CX4016", code: "CZ4016", name: "Advanced Topics in Algorithms" },
                {id: "CX4015", code: "CZ4015", name: "Simulation and Modelling" },
                {id: "CX4012", code: "CZ4012", name: "Cloud Computing and its Applications (Special Topic)" },
                {id: "CX4014", code: "CZ4014", name: "Programming Massively Parallel Processors (Special Topic)" },
                {id: "CX4001", code: "CZ4001", name: "Augmented and Virtual Reality" },
                {id: "CX4002", code: "CZ4002", name: "Visual Media Compression and Processing" },
                {id: "CX4003", code: "CZ4003", name: "Computer Vision" },
                {id: "CX4004", code: "CZ4004", name: "3D Modelling and Animation" },
                {id: "CX4021", code: "CZ4021", name: "Pervasive Networks" },
                {id: "CX4022", code: "CZ4022", name: "Personal Mobile Networks" },
                {id: "CX4023", code: "CZ4023", name: "Advanced Computer Networks" },
                {id: "CX4024", code: "CZ4024", name: "Cryptography and Network Security" },
                {id: "CX4062", code: "CZ4062", name: "Computer Security (System Security)" },
                {id: "CX4064", code: "CZ4064", name: "Security Management" },
                {id: "CX4065", code: "CZ4065", name: "Digital Forensics" },
                {id: "CZ4031", code: "CZ4031", name: "Database System Principles" },
                {id: "CZ4032", code: "CZ4032", name: "Data Analytics and Mining" },
                {id: "CZ4033", code: "CZ4033", name: "Advanced Data Management" },
                {id: "CZ4034", code: "CZ4034", name: "Information Retrieval" },
                {id: "CZ4041", code: "CZ4041", name: "Machine Learning" },
                {id: "CZ4042", code: "CZ4042", name: "Neural Networks" },
                {id: "CZ4043", code: "CZ4043", name: "Decision Support Systems" },
                {id: "CZ4044", code: "CZ4044", name: "Business Intelligence" },
                {id: "CZ4045", code: "CZ4045", name: "Natural Language Processing (Special Topic)" },
                {id: "CZ4046", code: "CZ4046", name: "Intelligent Agents (Special Topic)" },
                {id: "CE4051", code: "CE4051", name: "Embedded Systems Design" },
                {id: "CE4052", code: "CE4052", name: "Embedded Software Development" },
                {id: "CE4053", code: "CE4053", name: "Embedded Operating Systems" },
                {id: "CE4054", code: "CE4054", name: "Programmable Systems‐ on‐Chip" },
                {id: "CX1002", code: "CE1002", name: "Introduction to Computing Systems" },
                {id: "CX1003", code: "CE1003", name: "Introduction to Computational Thinking" },
                {id: "CX1004", code: "CE1004", name: "Great Ideas in Computing" },
                {id: "CX1005", code: "CE1005", name: "Digital Logic" },
                {id: "CX1006", code: "CE1006", name: "Computer Organisation and Architecture" },
                {id: "CX1007", code: "CE1007", name: "Data Structures" },
                {id: "CX1008", code: "CE1008", name: "Engineering Mathematics" },
                {id: "CX2001", code: "CE2001", name: "Algorithms" },
                {id: "CX2002", code: "CE2002", name: "Object Oriented Design & Programming" },
                {id: "CE2003", code: "CE2003", name: "Digital Systems Design" },
                {id: "CE2004", code: "CE2004", name: "Circuits and Signal Analysis" },
                {id: "CX2005", code: "CE2005", name: "Operating Systems" },
                {id: "CX2006", code: "CE2006", name: "Software Engineering" },
                {id: "CE2007", code: "CE2007", name: "Microprocessor‐based Systems Design" },
                {id: "CX3001", code: "CE3001", name: "Advanced Computer Architecture" },
                {id: "CE3002", code: "CE3002", name: "Sensors, Interfacing and Control" },
                {id: "CE3003", code: "CE3003", name: "Microcontroller Programming" },
                {id: "CX3004", code: "CE3004", name: "Multidisciplinary Design Project" },
                {id: "CE3005", code: "CE3005", name: "Computer Networks" },
                {id: "CE3006", code: "CE3006", name: "Digital Communications" },
                {id: "CE3007", code: "CE3007", name: "Digital Signal Processing" },
                {id: "CX4011", code: "CE4011", name: "Parallel Computing" },
                {id: "CX4013", code: "CE4013", name: "Distributed Systems" },
                {id: "CX4016", code: "CE4016", name: "Advanced Topics in Algorithms" },
                {id: "CX4015", code: "CE4015", name: "Simulation and Modelling" },
                {id: "CX4012", code: "CE4012", name: "Cloud Computing and its Applications (Special Topic)" },
                {id: "CX4014", code: "CE4014", name: "Programming Massively Parallel Processors (Special Topic)" },
                {id: "CX4001", code: "CE4001", name: "Augmented and Virtual Reality" },
                {id: "CX4002", code: "CE4002", name: "Visual Media Compression and Processing" },
                {id: "CX4003", code: "CE4003", name: "Computer Vision" },
                {id: "CX4004", code: "CE4004", name: "3D Modelling and Animation" },
                {id: "CX4021", code: "CE4021", name: "Pervasive Networks" },
                {id: "CX4022", code: "CE4022", name: "Personal Mobile Networks" },
                {id: "CX4023", code: "CE4023", name: "Advanced Computer Networks" },
                {id: "CX4024", code: "CE4024", name: "Cryptography and Network Security" },
                {id: "CX4024", code: "CE4024", name: "Cryptography and Network Security" },
                {id: "CX4062", code: "CE4062", name: "Computer Security (System Security)" },
                {id: "CX4064", code: "CE4064", name: "Security Management" },
                {id: "CX4065", code: "CE4065", name: "Digital Forensics" }
            ];
            for(var module of modules){
                Modules.insert(module);
            }
        }
    })();
    (function addRepoIfEmpty(){
        if(Repos.find().count() == 0){
            var repos = [{ mod: "CX1003", owner: "almightyGOSU", repo_name: "CZ1003-Introduction-To-Computational-Thinking" },
                { mod: "CX1003", owner: "SuyashLakhotia", repo_name: "SpellCheck" },
                { mod: "CX1003", owner: "nikv96", repo_name: "SpellCheck" },
                { mod: "CX2002", owner: "imdreamrunner", repo_name: "CZ2002Project" },
                { mod: "CX2002", owner: "rohitsm", repo_name: "MovieBookingSystem" },
                { mod: "CX2002", owner: "koallen", repo_name: "moblima" },
                { mod: "CX2002", owner: "SuyashLakhotia", repo_name: "MovieBookingSystem" },
                { mod: "CX2002", owner: "ZhiHaoSun", repo_name: "MOBLIMA-2005" },
                { mod: "CX2002", owner: "ZhiHaoSun", repo_name: "CZ2002-Assignment" },
                { mod: "CX2002", owner: "nikv96", repo_name: "Fork-Cinema" },
                { mod: "CX2002", owner: "almightyGOSU", repo_name: "CZ2002-OODP-Restaurant-Reservation-and-Point-of-Sale-System" },
                { mod: "CX2002", owner: "cly753", repo_name: "tinyMoblima" },
                { mod: "CZ2004", owner: "imdreamrunner", repo_name: "HCI-Notes" },
                { mod: "CX2006", owner: "SuyashLakhotia", repo_name: "NEAWeatherApp" },
                { mod: "CX2006", owner: "imdreamrunner", repo_name: "CatEffectServer" },
                { mod: "CX2006", owner: "junyihjy", repo_name: "cz2006-project" },
                { mod: "CX2006", owner: "almightyGOSU", repo_name: "CZ2006-Software-Engineering-openSNAP", repo_link: "https://github.com/almightyGOSU/CZ2006-Software-Engineering-openSNAP" },
                { mod: "CX2006", owner: "blakegong", repo_name: "eProctorFX" },
                { mod: "CX2006", owner: "Crazyconv", repo_name: "eProctor_CodeMonkey" },
                { mod: "CZ2007", owner: "imdreamrunner", repo_name: "cz2007lab" },
                { mod: "CX3001", owner: "MiPiPe", repo_name: "miCPU" },
                { mod: "CX3001", owner: "cly753", repo_name: "CE3001Project" },
                { mod: "CX3001", owner: "Crazyconv", repo_name: "5-pipeline-MIPS-CPU" },
                { mod: "CZ3002", owner: "chenwenjie1993", repo_name: "CZ3002_ezlife" },
                { mod: "CZ3002", owner: "almightyGOSU", repo_name: "CZ3002-G4-MemoryBooster" },
                { mod: "CZ3003", owner: "imdreamrunner", repo_name: "NTU_CZ3003_Extinguisher" },
                { mod: "CZ3003", owner: "Rhteo", repo_name: "CZ3003-CMS" },
                { mod: "CZ3003", owner: "junyihjy", repo_name: "cz3003backend" },
                { mod: "CX3004", owner: "imdreamrunner", repo_name: "RobotSimulator" },
                { mod: "CX3004", owner: "Andyccs", repo_name: "MDP_Arduino" },
                { mod: "CX3004", owner: "rohitsm", repo_name: "ntu.sce.mdp.2" },
                { mod: "CX3004", owner: "junyihjy", repo_name: "mdp_hardware" },
                { mod: "CX3004", owner: "almightyGOSU", repo_name: "CZ3004-MDP-Almighty-Algorithm" },
                { mod: "CX3004", owner: "blakegong", repo_name: "MDP-Arduino" },
                { mod: "CX3004", owner: "Crazyconv", repo_name: "MDP_rpi" },
                { mod: "CZ3006", owner: "koallen", repo_name: "sliding-window-protocol" },
                { mod: "CZ3006", owner: "SuyashLakhotia", repo_name: "SlidingWindowProtocol" },
                { mod: "CZ3006", owner: "nikv96", repo_name: "SlidingWindowProtocol" },
                { mod: "CZ3007", owner: "liuzhanqi", repo_name: "CZ3007Lab4Clean" },
                { mod: "CX4013", owner: "imdreamrunner", repo_name: "yogurt.cloud" },
                { mod: "CX4013", owner: "rohitsm", repo_name: "distsystems" },
                { mod: "CX4011", owner: "liuzhanqi", repo_name: "Parallel-Floyd-Warshall" },
                { mod: "CX4011", owner: "Crazyconv", repo_name: "Floyd_Warshall_Parallel" },
                { mod: "CZ4031", owner: "almightyGOSU", repo_name: "CZ4031-SAX-Parser" },
                { mod: "CZ4031", owner: "Crazyconv", repo_name: "Crazy_DB" },
                { mod: "CZ4032", owner: "liux0054", repo_name: "data-mining-on-mushroom" },
                { mod: "CZ4032", owner: "almightyGOSU", repo_name: "CZ4032-Data-Mining" },
                { mod: "CZ4042", owner: "Andyccs", repo_name: "Neural-Network-Assignment" },
                { mod: "CZ4045", owner: "liux0054", repo_name: "nlp" },
                { mod: "CZ4045", owner: "almightyGOSU", repo_name: "CZ4045-NLP-King-Chody-Almighty-Backend" },
                { mod: "CZ4045", owner: "almightyGOSU", repo_name: "CZ4045-NLP-Crawler" },
                { mod: "CZ4046", owner: "almightyGOSU", repo_name: "CZ4046-Intelligent-Agents-Assignment-1" },
                { mod: "CX4062", owner: "cly753", repo_name: "cz4062_project" },
                { mod: "CX4062", owner: "blakegong", repo_name: "CX4062-Computer-Security" }];

            for(var repo of repos){
                Meteor.call('addRepo', repo.mod, repo.owner, repo.repo_name);
            }
        }
    })();
});
