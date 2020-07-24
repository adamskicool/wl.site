import {IPresetExerciseSet} from '@/store/entities/preset-exercise-set';

export const groupExerciseSets = (sets: IPresetExerciseSet[]): any => {
	if (!sets || sets.length === 0) {
		return [];
	}
	//get the first set.
	const firstSet: IPresetExerciseSet | undefined = sets.find(
		(set1: IPresetExerciseSet) => {
			return !sets.some((set2) => set2.nextPresetExerciseId === set1.id);
		}
	);

	if (!firstSet) {
		throw new Error('No first set!');
	}

	let groups: {
		exerciseNumber: number;
		presetExerciseSets: IPresetExerciseSet[];
	}[] = [];
	let currentGroup: IPresetExerciseSet[] = [];
	let currentGroupExerciseId: string = firstSet.exerciseId;
	let currentSet: IPresetExerciseSet | undefined = firstSet;
	let count = 1;

	while (currentSet) {
		if (currentGroupExerciseId === currentSet.exerciseId) {
			currentGroup.push(currentSet);
		} else {
			groups.push({exerciseNumber: count, presetExerciseSets: currentGroup});
			currentGroup = [];
			currentGroup.push(currentSet);
			count++;
		}
		currentGroupExerciseId = currentSet.exerciseId;

		const nextId: string = currentSet
			? currentSet.nextPresetExerciseId
			: 'this id is impossible';
		currentSet = sets.find((set: IPresetExerciseSet) => set.id === nextId);
	}
	groups.push({exerciseNumber: count, presetExerciseSets: currentGroup});

	return groups;
};
