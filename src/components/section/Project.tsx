"use client";
import React, { useEffect, useState } from "react";

interface ProjectProps {
  // Define any props the Project component will need
}

interface Repo {
  // Define the structure of a repository object
  name: string;
  description: string;
  html_url: string;
  topics: string[]; // Adjusted to "topics" to match the GitHub API response structure
  // Add other relevant properties
}

const Project: React.FC<ProjectProps> = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const selectedReposByName = ["Portfolio", "SafetyCard", "TemplateTwo"];
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/BNK4970/repos"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }
        const data = await response.json();

        // Filtrer les repos par les noms sélectionnés
        const selectedRepos = data.filter((repo: Repo) =>
          selectedReposByName.includes(repo.name)
        );

        setRepos(selectedRepos);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <React.Fragment>
      {repos.map((repo, idx) => (
        <div
          key={idx}
          className="w-full p-2 outline outline-2 outline-[rgb(var(--secondary))] rounded-md grid grid-cols-1 grid-rows-[1fr_auto] gap-4"
        >
          <div>
            <h1 key={idx} className="uppercase">
              {repo.name}
            </h1>
            <p>{repo.description}</p>
          </div>
          <ul className="flex items-center gap-2">
            {repo.topics.map((topic, idx) => (
              <li
                key={idx}
                className="bg-[rgb(var(--primary))] w-fit p-1 rounded-md text-[rgb(var(--background))] text-sm"
              >
                {topic}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </React.Fragment>
  );
};

export default Project;
