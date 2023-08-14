export let dataFromApiTS = {
  data:[
  {
    accId: 1,
    cdetsInfo: {
      bug_last_updated: "2023",
      cdets_affected_pf: ["cisco 1000", "cisco 1001"],
      cdets_id: "cdet_id_100",
      cdets_title: "cdets 100 title 1",
    },
    cdetsTableInfo: [
      {
        match_percentage: 95,
        sr_affected_pid: "c100_pid_1",
        sr_description: "switch reloaded unexpecte table row 1 row 1",
        sr_last_update: "2023_apr_04",
        sr_number: "95-one",
        sr_resolution_summary: "summary one one",
        sr_symptoms: "technology symptoms one one",
        sr_affected_pf:["ONE_pf1_1","ONE_pf1_2","ONE_pf1_3"],
        sr_affected_sw:["ONE_sw1_100.1","ONE_sw1_100.2","ONE_sw1_100.3"]
      },
      {
        match_percentage: 94,
        sr_affected_pid: "c100_pid_2",
        sr_description: "switch reloaded unexpecte table row 1 row 2",
        sr_last_update: "2023_Jun_04",
        sr_number: "95-two",
        sr_resolution_summary: "summary one two",
        sr_symptoms: "technology symptoms one two",
        sr_affected_pf:["ONE_pf2_1","ONE_pf2_2","ONE_pf2_3"],
        sr_affected_sw:["ONE_sw2_100.1","ONE_sw2_100.2","ONE_sw2_100.3","ONE_sw2_100.2_all"]
      },
      {
        match_percentage: 93,
        sr_affected_pid: "c100_pid_3",
        sr_description: "switch reloaded unexpecte table row 1 row 3",
        sr_last_update: "2023_May_04",
        sr_number: "95-three",
        sr_resolution_summary: "summary one three",
        sr_symptoms: "technology symptoms one three",
        sr_affected_pf:["ONE_pf3_1","ONE_pf3_2","ONE_pf3_3"],
        sr_affected_sw:["ONE_sw3_100.1","ONE_sw3_100.2","ONE_sw3_100.3"]
      },
    ],
  },
  {
    accId: 2,
    cdetsInfo: {
      bug_last_updated: "2022",
      cdets_affected_pf: ["cisco 2000", "cisco 2001"],
      cdets_id: "cdet_id_200",
      cdets_title: "cdets 200 title 1",
    },
    cdetsTableInfo: [
      {
        match_percentage: 85,
        sr_affected_pid: "c200_pid_1",
        sr_description: "switch reloaded unexpecte table row 2 row 1",
        sr_last_update: "2022_apr_04",
        sr_number: "94-one",
        sr_resolution_summary: "summary two one",
        sr_symptoms: "technology symptoms two one",
        sr_affected_pf:["TWO_pf1_1","TWO_pf1_2","TWO_pf1_3"],
        sr_affected_sw:["TWO_sw1_100.1","TWO_sw1_100.2","TWO_sw1_100.3",,"ONE_sw2_100.2_all"]
      },
      {
        match_percentage: 84,
        sr_affected_pid: "c100_pid_2",
        sr_description: "switch reloaded unexpecte table row 2 row 2",
        sr_last_update: "2022_Jun_04",
        sr_number: "94-two",
        sr_resolution_summary: "summary two two",
        sr_symptoms: "technology symptoms two two",
        sr_affected_pf:["TWO_pf2_1","TWO_pf2_2","TWO_pf2_3"],
        sr_affected_sw:["TWO_sw2_100.1","TWO_sw2_100.2","TWO_sw2_100.3"]
      },
      {
        match_percentage: 90,
        sr_affected_pid: "c100_pid_3",
        sr_description: "switch reloaded unexpecte table row 2 row 3",
        sr_last_update: "2022_May_04",
        sr_number: "94-three",
        sr_resolution_summary: "summary two three",
        sr_symptoms: "technology symptoms two three",
        sr_affected_pf:["TWO_pf3_1","TWO_pf3_2","TWO_pf3_3"],
        sr_affected_sw:["TWO_sw3_100.1","TWO_sw3_100.2","TWO_sw3_100.3"]
      },
    ],
  },
  {
    accId: 3,
    cdetsInfo: {
      bug_last_updated: "2020",
      cdets_affected_pf: ["cisco 3000", "cisco 3001"],
      cdets_id: "cdet_id_300",
      cdets_title: "cdets 300 title 1",
    },
    cdetsTableInfo: [
      {
        match_percentage: 75,
        sr_affected_pid: "c300_pid_1",
        sr_description: "switch reloaded unexpecte table row 3 row 1",
        sr_last_update: "2020_jan_04",
        sr_number: "93-one",
        sr_resolution_summary: "summary three one",
        sr_symptoms: "technology symptoms three one",
        sr_affected_pf:["THREE_pf3_1","THREE_pf3_2","THREE_pf3_3"],
        sr_affected_sw:["THREE_sw3_100.1","THREE_sw3_100.2","THREE_sw3_100.3"]
      },
      {
        match_percentage: 74,
        sr_affected_pid: "c300_pid_2",
        sr_description: "switch reloaded unexpecte table row 3 row 2",
        sr_last_update: "2020_mar_04",
        sr_number: "93-two",
        sr_resolution_summary: "summary three two",
        sr_symptoms: "technology symptoms three two",
        sr_affected_pf:["THREE_pf3_1","THREE_pf3_2","THREE_pf3_3"],
        sr_affected_sw:["THREE_sw3_300.1","THREE_sw3_300.2","THREE_sw3_300.3","ONE_sw2_100.2_all"]
      },
      {
        match_percentage: 70,
        sr_affected_pid: "c300_pid_3",
         sr_description: "switch reloaded unexpecte table row 3 row 3",
        sr_last_update: "2020_feb_04",
        sr_number: "93-three",
        sr_resolution_summary: "summary three three",
        sr_symptoms: "technology symptoms three three",
         sr_affected_pf:["THREE_pf3_1","THREE_pf3_2","THREE_pf3_3"],
        sr_affected_sw:["THREE_sw3_300.1","THREE_sw3_300.2","THREE_sw3_300.3"]
      },
    ],
  },
]
};
