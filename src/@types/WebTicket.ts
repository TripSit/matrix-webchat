export type WebTicket = {
    id: string | undefined;
	userId: string | undefined;
	matrix_roomId: string | undefined;
	matrix_metaRoomId: string | null | undefined;
	discord_threadId: string | null | undefined;
	status: string | undefined;
	closed_by: string | null | undefined;
	reopened_by: string | null | undefined;
	deleted_by: string | null | undefined;
	deleted_at: Date | undefined;
	closed_at: Date | undefined;
	createdAt: Date | undefined;
	updatedAt: Date | undefined;
}