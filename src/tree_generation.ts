export const generateNarrationTree = (narrations: any[]) => {
    let result: any[] = [];
    narrations.forEach(narration => {
        if (Array.isArray(narration.narration)) {
            if (narration?.is_dependency) {
                fetchRoleInfoFromRuleId(narration.statement_id);
            }
            const narrationTreeItem = <NarrationTreeItem result={!!narration?.result} title={narration.title || '_'} data={narration?.narration} mode = 'NODE'/>;
            result = [...result, {
                title: narrationTreeItem,
                key: narration.statement_id?.$uuid || narration.statement_id,
                children: generateNarrationTree(narration.narration),
            }];
        } else {
            const title = narration.narration.code + ' - ' + narration.title;
            const narrationTreeItem = <NarrationTreeItem result={!!narration?.result} title={title} data={narration?.narration} mode = 'LEAF'/>;
            result = [...result, {
                ...narration.narration,
                title:narrationTreeItem,
                key: narration.statement_id?.$uuid || narration.statement_id,
            }];
        }
    });
    return result;
};
