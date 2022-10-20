export const API = () => {
  return new Promise((resolved, rejected) => {
    const planes = [
      {
        name: "Cessna 150",
        costoPorHora: 150,
        foto: "https://upload.wikimedia.org/wikipedia/commons/5/55/Cessna_150M_%28cropped%29.jpg",
      },
      {
        name: "Piper Cherokee six",
        costoPorHora: 282.26,
        foto: "https://dsgiipnwy1jd8.cloudfront.net/eyJidWNrZXQiOiJ0YXAtYXNzZXRzMSIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NjgwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJhbHBoYSI6MSwiciI6MjU1LCJiIjoyNTUsImciOjI1NX19LCJzbWFydE92ZXJsYXkiOnsiYnVja2V0IjoidGFwLWFzc2V0czEiLCJrZXkiOiJ3YXRlcm1hcmsucG5nIn19LCJrZXkiOiI4ODkzOTcuanBnIn0=",
      },
      {
        name: "Cessna 310",
        costoPorHora: 501,
        foto: "https://s30377.pcdn.co/wp-content/uploads/2019/09/p1d6f2nsl4kqbv7p1hq11j9ut26d.jpg",
      },
      {
        name: "Mustang p-51",
        costoPorHora: 3100,
        foto: "https://images5.alphacoders.com/654/654287.jpg",
      },
      {
        name: "Cessna 150",
        costoPorHora: 150,
        foto: "https://upload.wikimedia.org/wikipedia/commons/5/55/Cessna_150M_%28cropped%29.jpg",
      },
      {
        name: "Piper Cherokee six",
        costoPorHora: 282.26,
        foto: "https://dsgiipnwy1jd8.cloudfront.net/eyJidWNrZXQiOiJ0YXAtYXNzZXRzMSIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NjgwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJhbHBoYSI6MSwiciI6MjU1LCJiIjoyNTUsImciOjI1NX19LCJzbWFydE92ZXJsYXkiOnsiYnVja2V0IjoidGFwLWFzc2V0czEiLCJrZXkiOiJ3YXRlcm1hcmsucG5nIn19LCJrZXkiOiI4ODkzOTcuanBnIn0=",
      },
      {
        name: "Cessna 310",
        costoPorHora: 501,
        foto: "https://s30377.pcdn.co/wp-content/uploads/2019/09/p1d6f2nsl4kqbv7p1hq11j9ut26d.jpg",
      },
      {
        name: "Mustang p-51",
        costoPorHora: 3100,
        foto: "https://images5.alphacoders.com/654/654287.jpg",
      },
    ];
    resolved(planes);
  });
};
