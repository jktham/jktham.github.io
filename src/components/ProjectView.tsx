import {Project} from "@/lib/projects";
import styles from "@/styles/ProjectView.module.css"
import nextConfig from "../../next.config";

export default function ProjectView({project, index}: {project: Project; index: number}) {
	return (
		<div className={index % 2 == 0 ? styles.projectView : [styles.projectView, styles.reverse].join(" ")}>
			<div className={styles.info}>
				<div className={styles.name}>{project.name}</div>
				<div className={styles.year}>{project.year}</div>
				<div className={styles.status}>{project.status}</div>
				<div className={styles.links}>
					<a className={styles.repo} href={project.repo}>Repo</a>
					<a className={styles.live} href={project.live}>Live</a>
				</div>
				<div className={styles.tools}>
					{project.tools.map((tool, i) => <div className={styles.tool} key={i}>{tool}</div>)}
				</div>
				<div className={styles.description}>{project.description}</div>
				<div className={styles.contributors}>
					{project.contributors.map((contributor, i) => <a className={styles.contributor} href={contributor.link} key={i}>{contributor.name}</a>)}
				</div>
			</div>
			<div className={styles.images}>
				{project.images.map((image, i) => <div className={styles.image} key={i}><img src={`${nextConfig.basePath}/${image}`}></img></div>)}
			</div>
		</div>
	);
}
