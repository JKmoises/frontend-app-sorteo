import { TableCell, TableRow } from './table';
import { Delete, Edit } from '../icons';
import { cutText } from '@/utils/utils';
import { useMutationRaffle } from '@/hooks/useMutationRaffle';
import Link from 'next/link';

interface Props {
	id: string;
	name: string;
	description: string;
	position: number;
}

export const TableItem = ({ id, name, description, position }: Props) => {
	const { mutationDelete } = useMutationRaffle();

	const handleDeleteRaffle = async (id: string) => {
		await mutationDelete.mutateAsync(id);
	};

	return (
		<TableRow
			key={id}
			className='bg-[#424C70]'>
			<TableCell className='text-center border-l-4 border-l-purple-app-400 sm:text-lg'>
				{position + 1}
			</TableCell>
			<TableCell className='text-center sm:text-lg'>{cutText(name)}</TableCell>
			<TableCell className='text-center sm:text-lg'>
				{cutText(description)}
			</TableCell>
			<TableCell className='text-center flex flex-col min-[480px]:flex-row gap-2 items-center justify-center'>
				<Link href={`/sorteos/editar/${id}`}>
					<Edit />
				</Link>
				<button onClick={() => handleDeleteRaffle(id)}>
					<Delete />
				</button>
			</TableCell>
		</TableRow>
	);
};
