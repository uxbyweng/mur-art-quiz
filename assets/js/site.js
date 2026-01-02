 <script>
    (function () {
      const repo = "mur-art-quiz";
      const isGitHubPages = location.hostname.endsWith("github.io");
      const base = isGitHubPages ? `/${repo}/` : "/";
      document.write(`<base href="${base}">`);
    })();
  </script>