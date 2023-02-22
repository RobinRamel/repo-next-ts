import Repository from "./repository";
import styles from "@/styles/components/displayCards.module.scss"
import { useState } from "react";

type Props = {
  apiResponse: {
    organization: {
      repositories: {
        edges: {
          node: {
            id: string;
            description: string;
            name: string;
            url: string;
          }
        }[]
      }
    }
  }
}

const DisplayArea = ({ apiResponse }: Props) => {
  const [lastID, setLastID] = useState<string | null>(null)
  const data = apiResponse.organization.repositories.edges
  
  if (!lastID) {
    setLastID(data[data.length - 1].node.id)
  }

  return (
    <div className={styles.displayReposArea}>
      {
        data.map((repo, index) => {
          return (
            <Repository 
              key={index}
              description={repo.node.description}
              name={repo.node.name}
              url={repo.node.url}
            />
          )
        })
      }
    </div>
  );
}


export default DisplayArea;
